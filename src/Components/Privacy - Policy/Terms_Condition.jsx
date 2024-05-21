import React from "react";

const Policy = () => {
  return (
    <main className="main_wrapper p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Terms & Policies</h1>
        <span className="block text-gray-600 mb-1">Effective May 6, 2024</span>
        <span className="block text-gray-600">Our terms as per the FA '24 - '25</span>
      </header>

      <section className="table_of_content mb-8">
        <h2 className="text-2xl font-semibold mb-4">Table of Content</h2>
        <ol className="list-decimal pl-4">
          <li className="mb-2">
            <a href="#contract" className="text-blue-500 hover:underline">Contract</a>
          </li>
          <li className="mb-2">
            <a href="#obligations" className="text-blue-500 hover:underline">Obligations</a>
          </li>
          <li className="mb-2">
            <a href="#intellect" className="text-blue-500 hover:underline">Intellectual property</a>
          </li>
          <li className="mb-2">
            <a href="#page-service" className="text-blue-500 hover:underline">Page service limits</a>
          </li>
          <li className="mb-2">
            <a href="#modifications" className="text-blue-500 hover:underline">Modifications and termination</a>
          </li>
          <li className="mb-2">
            <a href="#misc" className="text-blue-500 hover:underline">Miscellaneous</a>
          </li>
        </ol>
      </section>

      <section className="privacy__section mb-8" id="contract">
        <h2 className="text-2xl font-semibold mb-4">Contract</h2>
        <p className="text-gray-700">
          By creating, becoming an Administrator (as defined below), or continuing as an Administrator of a page (the “Page”) on our Business Services, you are agreeing to enter into legally binding contract terms between Internconnect (as defined below and also referred to as “we”,“us” and “our” ) and your Organization (as defined below) represented by the Page. “Organization” means the business represented by your Page, which may only be a legal entity (such as a university or company) or you, if you are operating the business in your individual capacity (such as a sole proprietorship). You also represent and warrant that you are authorized to enter into these contract terms on behalf of the Organization (collectively with the Organization, you and the other Administrators, if any, “You”). If You do not agree to this contract (the “Contract” or “Service Terms”), do not register as an Administrator and do not access or otherwise use any of our Business Services (including creating, claiming or continuing as an Administrator for the Page). In addition to the Service Terms, the Internconnect User Agreement, Privacy Policy and Cookie Policy apply to any use of our services. Additional terms may apply to specific features. For example, if You purchase premium features for the Page, such features may be subject to additional terms and payment obligations.
        </p>
      </section>

      <section className="privacy__section mb-8" id="obligations">
        <h2 className="text-2xl font-semibold mb-4">Obligations</h2>
        <p className="text-gray-700">
          As with our other Internconnect services, our collection, use and sharing of Your personal data is subject to our Privacy Policy (which includes our Cookie Policy and other documents referenced in the Privacy Policy) and updates. You agree that You will comply with the Service Terms when collecting, using or otherwise processing any personal data related to Members. If You process data about Members (obtained either directly from Internconnect services, from any third party application that has integrated with Internconnect's APIs, or otherwise), You must ensure that You have a legal basis for doing so and that Your processing is in compliance with applicable laws (including by clearly informing the Members about Your processing and obtaining their unambiguous consent where necessary). You are responsible for Your and Your agents’ processing of this data, including with respect to any secondary uses, disclosures or transfers of the data.
        </p>
      </section>

      <section className="privacy__section mb-8" id="intellect">
        <h2 className="text-2xl font-semibold mb-4">Intellectual</h2>
        <p className="text-gray-700">
          You grant to Internconnect (and its affiliates) a non-exclusive, worldwide, royalty-free, sublicensable and transferable license to use, copy, modify, distribute and publish any content You provide to Internconnect. The foregoing license survives termination of this Contract with regard to content provided prior to termination. You represent and warrant that you own or have all necessary rights (including intellectual property rights) to such content (including to grant the license above).
        </p>
      </section>

      <section className="privacy__section mb-8" id="page-service">
        <h2 className="text-2xl font-semibold mb-4">Page service limitations</h2>
        <p className="text-gray-700">
          You acknowledge and agree that:
          <br />
          <br />
          Any Administrator’s identity and actions related to the Page may be visible to others, including visitors and other Administrators of the Page.
          <br />
          <br />
          We may add or suspend any Administrator’s access to the Business Services (including administration of the Page) at any time at our own discretion.
          <br />
          <br />
          We may change or discontinue any of our services, including Business Services. In addition, Internconnect reserves the right to remove any Page on the Business Services at any time without notice, including all, or part of, the Page’s content.
          <br />
          <br />
          We may modify the Page in accordance with our policies. For example, we may modify the Organization name on the Page and add clarification statements to the Page to address member confusion or conflicting trademark rights. In addition, we may (a) restrict any name change and have no obligations to perform any change, merger or other request, and (b) determine how name changes will be represented on profiles and on other references to the Organization on Internconnect services.
          <br />
          <br />
          We are not obligated to publish any information or content on our Business Services (or other services) and can remove it in our sole discretion, with or without notice. Internconnect may be required by law to remove certain information or content in certain countries.
          <br />
          <br />
          We do not promise to store or keep showing any information and content that You have posted. We have no obligation to store, maintain or provide You a copy of any content or information that You or others provide, except to the extent required by applicable laws and as noted in our Privacy Policy.
        </p>
      </section>

      <section className="privacy__section mb-8" id="modifications">
        <h2 className="text-2xl font-semibold mb-4">Modifications and termination</h2>
        <p className="text-gray-700">
          Modification of Contract. We may modify this Contract from time to time. If we make material changes to the Contract, we will attempt to provide You notice through our Business Services (or by other means) to provide You the opportunity to review the changes before they become effective. We agree that changes cannot be retroactive. If You object to any changes, You may terminate Your agreement to this Contract however if You do not terminate Your agreement to this Contract, Your continued use of our Business Services after we publish or otherwise notify You about our changes to these terms means that You are consenting to the updated terms.
          <br />
          <br />
          Termination of Contract. If You wish to terminate this Contract, at any time You can do so by (1) removing all Administrators of the Page, including Yourself (and others, if applicable); (2) deactivating the Page; (3) if you are the only Administrator, closing your Internconnect account; and/or (4) notifying Internconnect through Contact Us. Internconnect has no obligation to de-activate the Page (even after termination). Internconnect may terminate this Contract by de-activating the Page and/or by providing notice to at least one Administrator or otherwise to the Organization.
        </p>
      </section>

      <section className="privacy__section mb-8" id="misc">
        <h2 className="text-2xl font-semibold mb-4">Miscellaneous</h2>
        <p className="text-gray-700">
          You may not rely on any undertaking, promise, assurance, statement, representation, warranty or understanding of any person relating to the subject matter of the Contract, other than as stated in the Contract. We may notify you within the Business Services or via the contact information of one or more Administrators provided us (e.g., email, mobile number, physical address of any Administrator and/or Organization). You agree to keep your contact information up to date. Internconnect accepts service of process at the address identified here. Any notices that You provide without compliance with this Section shall have no legal effect. If we do not act to enforce a breach of this Contract, that does not mean that Internconnect has waived its right to enforce this Contract. The Contract does not create a partnership, agency relationship, or joint venture between the parties. Neither party has the power or authority to bind the other or to create any obligation or responsibility on behalf of the other. Under no circumstances will any employee of one party be deemed to be the employee of the other. You may not assign this Contract in whole or in part without Internconnect’s prior written consent. Any attempted assignment in violation of this restriction is void. The Contract shall bind and inure to the benefit of the parties, their respective successors and permitted assigns. If the Contract is translated into a language other than English, the translation is for convenience only, and the English language version will govern. Internconnect may remotely monitor Your use of the Business Services to ensure compliance with the Contract. If any provision of the Contract is unenforceable, that provision will be modified to render it enforceable to the extent possible to give effect to the parties’ intentions and the remaining provisions will not be affected.
        </p>
      </section>
    </main>
  );
};

export default Policy;