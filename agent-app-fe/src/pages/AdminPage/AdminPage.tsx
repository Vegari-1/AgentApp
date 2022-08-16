import Layout from "../../components/organisms/Layout/Layout";
import ManageCompanyRequests from "../../components/organisms/ManageCompanyRequests/ManageCompanyRequests";
import CompanyModel from "../../models/CompanyModel";

const AdminPage: React.FC = () => {
  // dobavljanje koje se nalazi u plmanagecountries

  const requests: CompanyModel[] = [
    {
      id: "1",
      industrySector: "Design",
      companyName: "GreatDesign",
      companyEmail: "great@design.com",
      companyWebsite: "www.great-design.com",
      companyInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida interdum ex, et pulvinar ex egestas eu. Donec augue sapien, posuere vel tortor ac, elementum porttitor orci. Donec dictum sagittis ex, quis ultrices velit mollis vel.",
    },
    {
      id: "2",
      industrySector: "Software",
      companyName: "GreatSoftware",
      companyEmail: "great@software.com",
      companyWebsite: "www.great-software.com",
      companyInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida interdum ex, et pulvinar ex egestas eu. Donec augue sapien, posuere vel tortor ac, elementum porttitor orci. Donec dictum sagittis ex, quis ultrices velit mollis vel.",
    },
  ];

  const declineRequestHandler = (id: string) => {
    console.log("decline");
    // dispatch(deleteCountry({ id, navigate, path: "/manage-countries" }));
  };

  const acceptRequestHandler = (id: string) => {
    console.log("accept");
    // dispatch(
    //   getCountryById({ id: id!, route: EDIT_COUNTRY_PATH + id, navigate })
    // );
  };

  return (
    <Layout>
      <ManageCompanyRequests
        requests={requests}
        declineRequest={declineRequestHandler}
        acceptRequest={acceptRequestHandler}
      />
    </Layout>
  );
};

export default AdminPage;
