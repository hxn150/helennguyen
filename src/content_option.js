const logotext = "Helen Nguyen";

const meta = {
    title: "Helen Nguyen",
    description: "Hi! I am Helen",
};

const introdata = {
    title: "Hi 🙌 My name is Helen 🤠",
    animated: {
        first: "Welcome to my website!",
        second: "This is where you can learn a bit about my professional and personal life!",
        third: "Come to stay 🫶",
    },
    description: "I love designing websites and optimizing user experiences, and I am looking forward to becoming an entrepreneur and making an impact on my community using the technology I develop!",
    your_img_url: "https://drive.google.com/uc?export=view&id=1nDNxCzuISZ9EvN-Nq3HsaA5nKU_q-HZK",
};

//https://drive.google.com/file/d/1ZVlFf20azGdtTNhiqCkobahj_b8AGkZP/view?usp=drive_link
const image = document.createElement("img");
const apiKey = "2a67e147d7b59503605b2fb4095744bd3e1e2f7b"; // Replace with your API key
const fileID = introdata.your_img_id;
const imageURL = `https://www.googleapis.com/drive/v3/files/${fileID}?key=${apiKey}&alt=media`;

image.src = imageURL;

document.body.appendChild(image);

const dataabout = {
    title: "Facts About Myself",
    aboutme: "I am a current Junior majoring in Computer Science with minors in Banking & Finance and Maths at Case Western Reserve University. I am interested in Web Development and am looking for internship opportunities as a Software Engineer and Web Developer. I am also passionate about any opportunities within the Fintech world!",
};
const worktimeline = [
    {
        jobtitle: "Website Manager",
        where: "Associate with Case Western Reserve University, Department of Neuroscience",
        date: "Jan 2023 - Present",
    },
    {
        jobtitle: "Software Engineering Intern",
        where: "MoMo E-Wallet Services (FinTech)",
        date: "May 2023 - Aug 2023",
    },
    {
        jobtitle: "Associate Software Engineering",
        where: "TrueCommerce DiCentral",
        date: "May 2022 - Aug 2022",
    },
];

const skills = [{
        name: "Java",
        value: 90,
    },
    {
        name: "HTML",
        value: 85,
    },
    {
        name: "CSS",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "JavaScript",
        value: 50,
    },
    {
        name: "SQL",
        value: 50,
    },
    {
        name: "Python",
        value: 50,
    },
];

const internships = [{
        title: "Software Engineering Intern (ITC) @ MoMo E-Wallet Services",
        description: "• Streamlined internal navigation experiences and accuracy by over 90% using Typesense \n • Automated MoMo’s Web Admin testing and improved testing time by 20% using Puppeteer \n • Redesigned the layout of the MoMo App Store using frontend technologies such as React and CSS",
    },
    {
        title: "Website Manager @ Department of Neuroscience at CWRU",
        description: "• Redesigned UI/UX interfaces to streamline users’ navigation experiences by 30% using Drupal \n • Updated and edited recent publication listings, personnel listings with integration of Google Forms \n• Built and host over 5 websites for faculties to display their research more efficiently by 98%",
    },
    {
        title: "Associate Software Engineering @ TrueCommerce DiCentral",
        description: "• Improved customer’s navigation experiences by implementing 6 filter features using Angular 7 \n • Authored and briefed over 6 technical documents of new features and workflows to offshore teams \n • Streamlined customer’s rules checking processes by 45% by updating SQL stored procedures",
    },
];

const awards =[
    {
        jobtitle: "Best Hack Award (Civil Track) and Dream Big and Create More Cheers with AB InBev Award",
        where: "HACKCWRU 2022, Associate with Case Western Reserve University",
        date: "March 2022",
    },
    {
        jobtitle: "Dean's High Honor List",
        where: "Associate with Case Western Reserve University",
        date: "Aug 2021 - Present",
    },
];

const dataportfolio = [{
        img: "https://i.pinimg.com/564x/cb/36/3d/cb363db1dadc73a2cfbb3044beacc60a.jpg",
        description: "This is an interactive memory game with various difficulty levels (3x6, 4x6, 6x6) and a leadership board to record your highest records!",
        link: "https://github.com/hxn150/MemoryGame",
    },
    {
        img: "https://marketplace.canva.com/EAFO2zQwVFM/1/0/1131w/canva-beige-minimalist-to-do-list-planner-d9c2bZvUNHY.jpg",
        description: "ToDo List to record lists of tasks for users.",
        link: "https://github.com/hxn150/ToDoList",
    },
    {
        img: "https://i.etsystatic.com/9927664/r/il/1fe652/1701828855/il_fullxfull.1701828855_g1mf.jpg",
        description: "Booking form template created using Bootstrap for users to book an event for a specific date and see the according pricings.",
        link: "https://github.com/hxn150/BookingForm",
    },
    {
        img: "https://i.pinimg.com/1200x/3e/da/64/3eda649336ac4dee5dedb69c4d049842.jpg",
        description: "A health care website that will help to analyze the mental health of the users with the help of some questions which are taken from World Health Organization. Our website aims to not only record, track, but also provide suggestions of activities/songs to improve your current mood.",
        link: "https://www.youtube.com/watch?v=anOXjg4Rguk&ab_channel=HelenNguyen",
    },
];

const contactConfig = {
    YOUR_EMAIL: "hxn150@case.edu",
    YOUR_FONE: "(281)662-8279",
    description: "Please feel free to contact me via Email or Text about any inqueries or job opportunities that are aligned with my skillset! I look forward to speaking and connecting with you.",
};

const socialprofils = {
    github: "https://github.com/hxn150",
    linkedin: "https://www.linkedin.com/in/hiennguyen25",
};

const languages = [{
    name: "Vietnamese",
    value: 100,
},
{
    name: "Spanish",
    value: 50,
},
{
    name: "English",
    value: 100,
},
];

const photoportfolio = [
{
    img: "https://drive.google.com/uc?export=view&id=1zOl5An6Jae7060kUYz-x5SoIZoyozXpl",
    description: "Isabella Steward Gardner Museum \n Boston, MA 2023",
},
{
    img: "https://drive.google.com/uc?export=view&id=1_s8fQ_SWarE_YJpOQS0LU5VewnFuedrc",
    description: "Flekke \n Norway 2020",
},
{
    img: "https://drive.google.com/uc?export=view&id=1ApM33OAkzMs5hIlcigaokORz16J8chEw",
    description: "Nha Trang \n Vietnam 2023",
},

{
    img: "https://drive.google.com/uc?export=view&id=1Ln7aQGFIG-LIXBYa8DMNxKyvAq6VsDkZ",
    description: "Beacon Hill \n Boston, MA 2023",
},
{
    img: "https://drive.google.com/uc?export=view&id=1dTPQqvp7axmsZvv3QnzSlVez1XrJUfDV",
    description: "Cleveland Museum of Art \n Cleveland, OH 2022",
},
{
    img: "https://drive.google.com/uc?export=view&id=11eoo5vCZErSBJ_zkKWeC8y2f3e7bh1kz",
    description: "Nha Trang \n Vietnam 2023",
},
{
    img: "https://drive.google.com/uc?export=view&id=1kaVz_LXcZjucVm6_kqvnuO82tTW4BhLG",
    description: "District 1 \n Saigon, Vietnam 2023",
},
{
    img: "https://drive.google.com/uc?export=view&id=1rmEeleGw3NwY5ILdzTu8RxTl4OHurMnt",
    description: "My Khe, Da Nang \n Vietnam 2016",
},
{
    img: "https://drive.google.com/uc?export=view&id=1ENWq08FqvBKkyMR-f11Hs64J6I2DevWe",
    description: "Van Mieu Quoc Tu Giam \n (Temple of Literature) \n Hanoi, Vietnam 2023",
},
{
    img: "https://drive.google.com/uc?export=view&id=19eEeMRWN01Emufnc9i_cjG8Z6nGo4ocW",
    description: "Flekke \n Norway 2022",
},
{
    img: "https://drive.google.com/uc?export=view&id=1xyEhIwR0nsp7Y_lnsBPuXK3UNT7cVcSR",
    description: "Strandkaiterminalen \n Norway 2021",
},
{    
    img: "https://drive.google.com/uc?export=view&id=19-vpdhhkt0jBAtnty5P00mItLfr44Xyg",
    description: "Ho Guom \n Hanoi, Vietnam 2023",
},
{
    img: "https://drive.google.com/uc?export=view&id=1zW40mGm-Hle7F9lhgoozVIWScx1XzuQ9",
    description: " Dong Hoi \n Quang Binh, Vietnam 2023",
},
{
    img: "https://drive.google.com/uc?export=view&id=1PQdH_mMpAWWbVEPBmKqjjtGRPj4TsMVd",
    description: "Beacon Hill \n Boston, MA 2023",
},
{
    img: "https://drive.google.com/uc?export=view&id=1G5OMxpq1R1SB9PLwtJQA4003ctX3YjPS",
    description: "Milan \n Italy 2021",
},

{
    img: "https://drive.google.com/uc?export=view&id=1-MK8CH35q8fnWpGkm4dPsHZ6PuEDVZ5R",
    description: "Beacon Hill \n Boston, MA 2023",
},
{
    img: "https://drive.google.com/uc?export=view&id=1ZFTA7AFIfvxJ6n012_UK3Cex-Ia_UOq-",
    description: "Bergen \n Norway 2021",
},
{
    img: "https://drive.google.com/uc?export=view&id=1JjZCJTUt93biTL7Nm_RoNl-M-5C8xgUJ",
    description: "Beacon Hill \n Boston, MA 2023",
},
{
    img: "https://drive.google.com/uc?export=view&id=1zW0xnjTl98CJuCrlYmPKe30dwulME_Qd",
    description: "Nha Trang \n Vietnam 2023",
},
{
    img: "https://drive.google.com/uc?export=view&id=12E_qoZydaKlaQPA0kkvqkY0SsPl3XL66",
    description: "District 7 \n Ho Chi Minh City \n Vietnam 2020",
},

{
    img: "https://drive.google.com/uc?export=view&id=1XGVI0Eht83GD0ffJNCUaZ2GsMix9LuKl",
    description: "Beacon Hill \n Boston, MA 2023",
},
{
    img: "https://drive.google.com/uc?export=view&id=1Ja7cJfm7jGbUuySahAtpWcJfk0oO38Mz",
    description: "Isabella Steward Gardner Museum \n Boston, MA 2023",
},
{
    img: "https://drive.google.com/uc?export=view&id=1wcA4wsRKO_thcWxOPx2Mre123axePe6G",
    description: "Paris \n France 2021",
},
{
    img: "https://drive.google.com/uc?export=view&id=1hAueKWlLZgP0oXzu1bSavFkwjCoRQwm0",
    description: "Isabella Steward Gardner Museum \n Boston, MA 2023",
},
{
    img: "https://drive.google.com/uc?export=view&id=1H_EWb1jzTMsE6XtC2ShngrOQ5VOzsDDA",
    description: "Trang Tien Plaza \n Hanoi, Vietnam 2023",
},

{
    img: "https://drive.google.com/uc?export=view&id=1L6z1-DhPl5qS_WbVWy-nQ_EZi65-_KfC",
    description: "Nha Trang \n Vietnam 2023",
},
{
    img: "https://drive.google.com/uc?export=view&id=1jnEjClxUNS4Cc2zOiNmmE2v7qGFn-4rA",
    description: "Flekke \n Norway 2022",
},
{
    img: "https://drive.google.com/uc?export=view&id=1KKTi9GIVOTN2rcs47mlLSQc3zgHG6u9n",
    description: "Downtown Cleveland \n Cleveland, OH 2022",
},
{
    img: "https://drive.google.com/uc?export=view&id=1pQlauFOGR0Gm40g6_6LnNuXOkVeiwH88",
    description: "Flekke \n Norway 2022",
},
{
    img: "https://drive.google.com/uc?export=view&id=15QYfOgDRWDjowpsN4TZy3dd7BZETQAdo",
    description: "Cleveland Museum of Art \n Cleveland, OH 2022",
},
{
    img: "https://drive.google.com/uc?export=view&id=10Wayf1PdKL5uurf4Q2WV1MaA0o2vmaUS",
    description: "Flekke \n Norway 2020",
},
{
    img: "https://drive.google.com/uc?export=view&id=1C9oM2WCJLlS21xug8Ar6UBIRHlPccoJR",
    description: "Cleveland Beach \n Cleveland, OH 2022",
},
];

const image1 = document.createElement("img");
const fileID1 = introdata.your_img_id;
const imageURL1 = `https://www.googleapis.com/drive/v3/files/${fileID1}?key=${apiKey}&alt=media`;

image1.src = imageURL1;

document.body.appendChild(image1);

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    internships,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    awards,
    languages,
    photoportfolio,
};
