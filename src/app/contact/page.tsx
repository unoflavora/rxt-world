import ContactForm from "./(components)/Form";

export default function ContactUs() {
  return (
    <div className="w-full h-full ">
      <div className="flex container justify-between   max-sm:flex-col  gap-10 pt-20  h-full  text-white font-sans">
        <div className="flex flex-col gap-10 md:gap-24 bg-black min-h-[40rem] py-20 px-10 h-full min-w-max">
          <h1 className="text-4xl">Contact Information</h1>
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
        <div className="flex justify-start  items-center w-full pr-20">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
