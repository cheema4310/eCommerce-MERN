import React from "react";

import classes from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={classes.privacyPolicy}>
      <h2>Privacy Policy</h2>

      <div className={classes.content}>
        <p>
          Welcome to <span>ZoeAngebotX</span>. Protecting your privacy is
          important to us, and we are committed to ensuring that your personal
          information is handled with care. This Privacy Policy explains how we
          collect, use, and safeguard your information when you interact with
          our website and services.
        </p>
        <h4>What happens to your information in our care?</h4>
        <p>
          When you use our website or make a purchase, we may collect the
          following information: <br />
          <span>Personal Information</span>: We collect your name, shipping and
          billing addresses, email, and contact details to process your orders,
          manage returns and exchanges, and communicate with you effectively.
        </p>
        <p>
          <span>Technical Information</span>: To improve your browsing
          experience and ensure the security of our website, we collect certain
          technical data, such as your computer's IP address, browser type, and
          operating system. Rest assured that we handle this information
          responsibly and with your privacy in mind.
        </p>

        <p>
          We do not sell, trade, or rent your personal information to third
          parties. However, we may share your information with trusted partners
          and service providers who assist us in operating our website,
          conducting our business, and serving you better. These parties are
          bound by confidentiality agreements and are prohibited from using your
          information for unauthorized purposes.
        </p>
        <h4>Revisions to this privacy policy</h4>
        <p>
          We reserve the right to update this Privacy Policy at any time to
          reflect changes in our practices or for legal compliance. We encourage
          you to review this policy periodically for any updates. Significant
          changes will be prominently posted on our website, and the updated
          policy will become effective immediately upon posting. If you have any
          questions or concerns about our Privacy Policy, please contact us at{" "}
          <span>cheemaleb4281@gmail.com</span>
        </p>
        <h4>
          Last Updated: <span>September 7, 2023</span>
        </h4>
        <p>
          Thank you for trusting <span>ZoeAngebotX</span> with your personal
          information. Your privacy is important to us, and we are dedicated to
          protecting it.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
