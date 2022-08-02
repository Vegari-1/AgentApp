terraform {
  backend "pg" {
  }
}

provider "heroku" {
}

variable "agent_app_name" {
  description = "Unique name of the Agent app"
}

variable "frontend_app_name" {
  description = "Unique name of the FE Agent app"
}

resource "heroku_config" "agent_app" {
  vars = {
    STAGE = "test"
    CORS_ORIGIN = "https://${heroku_app.gateway.name}.herokuapp.com"
  }
}

resource "heroku_app" "agent_app" {
  name   = var.agent_app_name
  region = "eu"
  stack  = "container"
}

resource "heroku_build" "agent_app" {
  app_id = heroku_app.agent_app.id

  source {
    path = "agent_app"
  }
}

resource "heroku_app_config_association" "agent_app" {
  app_id = heroku_app.agent_app.id

  vars = heroku_config.agent_app.vars
}

resource "heroku_addon" "database" {
  app_id  = heroku_app.agent_app.id
  plan = "heroku-postgresql:hobby-dev"
}

resource "heroku_config" "gateway" {
  vars = {
    API_URL = "${heroku_app.agent_app.name}.herokuapp.com"
  }
}

resource "heroku_app" "gateway" {
  name   = var.frontend_app_name
  region = "eu"
  stack  = "container"
}

resource "heroku_app_config_association" "gateway" {
  app_id = heroku_app.gateway.id

  vars = heroku_config.gateway.vars
}

resource "heroku_build" "gateway" {
  app_id = heroku_app.gateway.id

  source {
    path = "agent-app-fe"
  }
  depends_on = [
    null_resource.gateway_build
  ]
}

data "template_file" "gateway_build" {
  template = file("${path.module}/agent-app-fe/heroku.tpl")
  vars = {
    api_url = "\\\"'https://${heroku_app.agent_app.name}.herokuapp.com/api'\\\""
  }
}

resource "null_resource" "gateway_build" {
  triggers = {
    template = data.template_file.gateway_build.rendered
  }

  provisioner "local-exec" {
    command = "echo \"${data.template_file.gateway_build.rendered}\" > ${path.module}/agent-app-fe/heroku.yml"
  }
}

output "agent_url" {
  value = "https://${heroku_app.agent_app.name}.herokuapp.com"
}
output "gateway_app_url" {
  value = "https://${heroku_app.gateway.name}.herokuapp.com"
}
