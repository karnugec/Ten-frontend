import React from "react";

const Privacy = () => {
  return (
    <main className="p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <span className="block text-gray-600 mb-1">Effective May 6, 2024</span>
        <span className="block text-gray-600">Our privacy policy has been updated</span>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Table of Content</h2>
        <ol className="list-decimal pl-4">
          <li className="mb-2">
            <a href="#data-collection" className="text-blue-500 hover:underline">Information we collect</a>
          </li>
          <li className="mb-2">
            <a href="#collection-usage" className="text-blue-500 hover:underline">How do we use your data</a>
          </li>
          <li className="mb-2">
            <a href="#information-sharing" className="text-blue-500 hover:underline">How we share information</a>
          </li>
          <li className="mb-2">
            <a href="#choices-obligations" className="text-blue-500 hover:underline">Your choices and obligations</a>
          </li>
          <li className="mb-2">
            <a href="#imp-info" className="text-blue-500 hover:underline">Other important information</a>
          </li>
        </ol>
      </section>

      <section className="mb-8" id="data-collection">
        <h2 className="text-2xl font-semibold mb-4">Data we collect</h2>
        <p className="text-gray-700">
          We collect data to serve you and others better. You provide some of this data directly, such as when you create your account. We get some of it by recording how you interact with our services by, for example, using technologies like cookies, and receiving error reports or usage data from software running on your device. We also obtain data from third parties.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Data you provide to us</h3>
        <p className="text-gray-700">
          <strong>Profile - </strong>
          You have choices about the information on your profile, such as your education, work experience, skills, photo, city or area and endorsements. You don’t have to provide additional information on your profile; however, profile information helps you to get more from our Services, including helping recruiters and business opportunities find you. It’s your choice whether to include sensitive information on your profile and to make that sensitive information public. Please do not post or add personal data to your profile that you would not want to be publicly available.
        </p>
        <br />
        <p className="text-gray-700">
          <strong>Registration - </strong>
          To create an account, you need to provide data including your name, email address and/or mobile number, and a password.
        </p>
      </section>

      <section className="mb-8" id="collection-usage">
        <h2 className="text-2xl font-semibold mb-4">How we use your data</h2>
        <p className="text-gray-700">
          How we use your personal data will depend on which Services you use, how you use those Services and the choices you make in your settings. We use the data that we have about you to provide and personalize our Services, including with the help of automated systems and inferences we make, so that our Services (including ads) can be more relevant and useful to you and others.
        </p>
      </section>

      <section className="mb-8" id="information-sharing">
        <h2 className="text-2xl font-semibold mb-4">How We Share Information</h2>
        <p className="text-gray-700">
          Any data that you include on your profile and any content you post or social action (e.g., likes, follows, comments, shares) you take on our Services will be seen by others.
        </p>
      </section>

      <section className="mb-8" id="choices-obligations">
        <h2 className="text-2xl font-semibold mb-4">Your choices and obligations</h2>
        <p className="text-gray-700">
          We generally retain your personal data as long as you keep your account open or as needed to provide you Services. This includes data you or others provided to us and data generated or inferred from your use of our Services. Even if you only use our Services when looking for a new job every few years, we will retain your information and keep your profile open, unless you close your account. In some cases we choose to retain certain information (e.g., insights about Services use) in a depersonalized or aggregated form.
          <br />
					<br />
          We provide many choices about the collection, use and sharing of your data, from deleting or correcting data you include in your profile and controlling the visibility of your posts to advertising opt-outs and communication controls. We offer you settings to control and manage the personal data we have about you.
        </p>
      </section>

      <section className="mb-8" id="imp-info">
        <h2 className="text-2xl font-semibold mb-4">Other important information</h2>
        <p className="text-gray-700">
          <strong>Security - </strong>
          We implement security safeguards designed to protect your data, such as HTTPS. We regularly monitor our systems for possible vulnerabilities and attacks. However, we cannot warrant the security of any information that you send us. There is no guarantee that data may not be accessed, disclosed, altered, or destroyed by breach of any of our physical, technical, or managerial safeguards.
        </p>
        <br />
        <p className="text-gray-700">
          <strong>Children - </strong>
          Our Services are not directed to persons under 13. If you become aware that your child has provided us with personal data without your consent, please contact us. We do not knowingly collect personal data from children under 13. If we become aware that a child under 13 has provided us with personal data, we take steps to remove such data and terminate the child’s account.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Changes to this Privacy Policy</h2>
        <p className="text-gray-700">
          We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, provide you with additional notice (such as adding a statement to our homepage or sending you a notification).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions or complaints about this Privacy Policy, please contact us at:
          <br />
          Email:{" "}
          <a href="mailto:tech@entrepreneurshipnetwork.net" className="text-blue-500 hover:underline">
            tech@entrepreneurshipnetwork.net
          </a>
          <br />
        </p>
      </section>
    </main>
  );
};

export default Privacy;