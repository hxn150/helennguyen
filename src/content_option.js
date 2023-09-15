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

image.width = 1; // Replace with your desired width
image.height = 2; 

document.body.appendChild(image);

const dataabout = {
    title: "Facts About Myself",
    aboutme: "I am a current Junior majoring in Computer Science with minors in Banking & Finanace and Maths at Case Western Reserve University. I am interested in Web Development and am looking for internship opportunities as a Software Engineer and Web Developer. I am also passionate about any opportunities within the Fintech world!",
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
        img: "https://www.teamly.com/blog/wp-content/uploads/2021/12/Master-Task-List.png",
        description: "ToDo List to record lists of tasks for users.",
        link: "https://github.com/hxn150/ToDoList",
    },
    {
        img: "https://strawberrykit.com/wp-content/uploads/2017/03/Booking-form-template-photographers.jpg",
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
};