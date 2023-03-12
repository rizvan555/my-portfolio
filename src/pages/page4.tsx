import React from 'react';

function Page4() {
  const experiances = [
    {
      title: 'Logistician',
      company: 'IK Hofmann GmbH',
      date: 'Nivember 2021 -  December 2022',
      contain:
        'I was responsible for ensuring the safe acceptance of containers, their inspection by me after being filled by other employees, and their proper placement to the appropriate locations at BASF, the largest chemical company. I worked with great attention to detail in these tasks and took all necessary precautions to ensure that the job was done correctly. I was meticulous in ensuring that the containers were properly labeled, marked, and stored or transported in a manner that prevented damage to the products.  In addition, I worked closely with my colleagues to ensure that the job was completed on time and without any issues. I always took care to protect the satisfaction of customers and the reputation of the company',
    },
    {
      title: 'Logistic planner',
      company: 'Syncreon GmbH',
      date: 'March 2020 - October 2021',
      contain:
        'One of my job responsibilities has been ensuring the proper management of logistics and ensuring timely, safe, and proper placement of goods for clients of any logistics company. This includes ensuring that containers and shipments are properly filled and that they are received and placed in accordance with the requirements of users.Overall, my work experience in this role has allowed me to develop my skills in logistics management, including the organization and safe handling of goods, as well as ensuring timely and effective delivery of shipments.',
    },
    {
      title: 'Front End Developer',
      company: 'Farkhadov LLC & Trans Broker MMC',
      date: 'Oktober 2006 - September 2015',
      contain:
        'During my tenure from 2006 to 2015, I had the opportunity to work as a Frontend Developer in various joint projects with Farkhadov LLC and Transbroker LLC. My role involved utilizing my expertise in HTML, CSS, JavaScript, and MySQL that I had acquired during my university studies. I was able to further develop these skills in a professional setting, working on diverse projects.As part of my responsibilities, I was responsible for monitoring the websites of various government agencies and private companies. This included ensuring the proper functioning of webpages, as well as managing and organizing the necessary data. I was also tasked with updating outdated information with the latest data to ensure that users had access to the most up-to-date information.Overall, my experience working in this role allowed me to hone my technical skills, learn to work collaboratively with colleagues, and develop an understanding of how to manage and maintain websites effectively.',
    },
  ];
  return (
    <div>
      <header className="flex justify-start py-16 px-20">
        <h2 className="text-5xl font-bold tracking-wider font-serif mb-[2vh]">
          Experiance
        </h2>
      </header>
      <main className="flex flex-col justify-center items-center gap-10">
        {experiances.map((experiance) => {
          return (
            <div className=" w-[60vw]">
              <h3 className="border-t-2 pt-8 text-3xl font-serif ">
                {experiance.title}
              </h3>
              <h3 className="pt-2 text-xl mb-4 font-serif ">
                {experiance.company}
              </h3>
              <span className="italic font-bold">{experiance.date}</span>
              <p className=" mt-4 mb-8">{experiance.contain}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Page4;
