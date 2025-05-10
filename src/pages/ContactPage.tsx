import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import SectionLayout from "@/components/SectionLayout";
import { projectDevelopers } from "@/data/contactData";

const ContactPage = () => {
  return (
    <PageLayout>
      <PageHeader />
      <SectionLayout>
        <div className="grid gap-8">
          <div className="grid gap-2">
            <h1 className="text-4xl font-bold">📞 Contact Us</h1>
            <p className="leading-8 sm:max-w-xl">
              Need help, have questions, or want to share your thoughts? Reach
              out through the contacts below. Whether it's project-related
              inquiries or mental health support, we’re here for you.
            </p>
          </div>
          <div className="grid gap-2">
            <h2 className="text-2xl font-bold">
              👥 Project Developers – G-Suite Emails
            </h2>
            <ul className="list-disc pl-4 leading-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {projectDevelopers.map((developer) => (
                <li key={developer.name}>
                  <p>
                    <strong>{developer.name}</strong>
                  </p>
                  <em>{developer.email}</em>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-2">
            <h2 className="text-2xl font-bold">
              🏫 Batangas State University (BSU)
            </h2>
            <ul className="list-disc pl-4 leading-8">
              <li>
                <p>
                  <strong>Office of the Guidance and Counseling</strong>
                </p>
                <em>ogc.lipa@g.batstate-u.edu.ph</em>
              </li>
            </ul>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <h2 className="text-2xl font-bold">
                🧠 Mental Health Support Hotlines
              </h2>
              <p className="leading-8 sm:max-w-xl">
                If you or someone you know is in emotional distress or needs
                someone to talk to, don’t hesitate to reach out:
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">NCMH Crisis Hotline</h3>
                <ul className="list-disc pl-4 grid gap-4">
                  <li>
                    <em>(02) 1533 (Luzon Landline)</em>
                  </li>
                  <li>
                    <em>0917-899-8727 (Globe)</em>
                  </li>
                  <li>
                    <em>0908-639-2672 (Smart)</em>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Hopeline</h3>
                <ul className="list-disc pl-4 grid gap-4">
                  <li>
                    <em>(02) 804-4673 (Landline)</em>
                  </li>
                  <li>
                    <em>0917-557-4673 (Globe)</em>
                  </li>
                  <li>
                    <em>0918-873-4673 (Smart)</em>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">In Touch: Crisis Line</h3>
                <ul className="list-disc pl-4 grid gap-4">
                  <li>
                    <em>(02) 893-7603 (Landline)</em>
                  </li>
                  <li>
                    <em>0919-056-0709 (Smart)</em>
                  </li>
                  <li>
                    <em>0917-800-1123 (Globe)</em>
                  </li>
                  <li>
                    <em>0922-893-8944 (Smart)</em>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default ContactPage;
