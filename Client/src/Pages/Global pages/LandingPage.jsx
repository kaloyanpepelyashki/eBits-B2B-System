export default function LandingPage() {
  const subject = "cool subject";
  const body = "This is a email sent with js";
  return (
    <>
      <main className="landing-page-content-wrapper page-main-section">
        <div className="landing-page-inner-content">
          <h1 className="landing-page-welcome-header">
            Before starting your shop journey, do you want us to sed you
            <b className="text-primary-color">our catalog</b>?
          </h1>
          <a href="mailto:kaloyan.professional@gmail.com?subject=`{subject}`&body=`{body}`">
            Click to Send an Email
          </a>
        </div>
      </main>
    </>
  );
}
