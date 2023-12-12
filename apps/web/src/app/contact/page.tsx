import ContactForm from "./(components)/Form";

export default function ContactUs() {
  return (
    <div className="container flex flex-col justify-center items-center md:flex-row  md:justify-between  gap-10   h-full  text-white font-sans">
      <div className="flex flex-col items-center justify-center md:items-start md:justify-start gap-10 md:gap-24 bg-black md:min-h-[40rem] p-10 md:py-20  h-full min-w-fit ">
        <h1 className="text-4xl max-md:text-center">Contact Information</h1>
        <div className="flex flex-col gap-10 text-xl">
          {[
            ["phone.svg", "+1012 3456 729"],
            ["Email.svg", "demo@gmail.com"],
            ["location.svg", "21 Valentin Peterson Road 24, London"],
          ].map((logo, i) => {
            return (
              <div key={logo[0]} className="flex gap-5">
                <img src={`/icons/${logo[0]}`} loading="lazy" />
                {logo[1]}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-start  items-center w-full ">
        <ContactForm />
      </div>
    </div>
  );
}
