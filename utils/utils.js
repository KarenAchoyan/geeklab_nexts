import {useIntl} from "react-intl";
import React from 'react';
import {
    DashboardOutlined,
    UserOutlined,
    AppstoreOutlined,
    TeamOutlined,
    BookOutlined,
    FileOutlined,
} from '@ant-design/icons';

export const validateEmail = (rule, value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value || emailRegex.test(value)) {
        return Promise.resolve();
    }
    return Promise.reject('Please enter a valid email address');
};

export const languages = [
    {id: 1, name: "EN", fullName: "English", value: 'en', flag: "/english.webp"},
    {id: 3, name: "ARM", fullName: "Հայերեն", value: 'hy', flag: "/amFlag.png"},
    {id: 4, name: "GE", fullName: "ქართული", value: 'ge', flag: "/amFlag.png"},
];

export const validatePassword = (rule, value) => {
    if (!value || value.length >= 6) {
        return Promise.resolve();
    }
    return Promise.reject('Password must be at least 6 characters long');
};

export const designLessons = []
export const lessons = [
    {
        id: 4,
        slug: "Front-end-development",
        title: {
            en: "Front-end development",
            hy: "Front-end ծրագրավորում",
            ge: "Front-end დეველოპმენტი"
        },
        duration: "6 ",
        price: "40.000",
        Deadline: "15/07/2024",
        isWhite: true,
        branchs:['georgia', 'armenia'],
        content: {
            en: "Welcome to GeekLab, where we're dedicated to cultivating the next generation of front-end developers. Our Front-end Development Bootcamp is designed to equip you with the skills and knowledge needed to thrive in the dynamic world of web development.",
            hy: "Բարի գալուստ GeekLab, որտեղ մենք նվիրված ենք front-end ծրագրավորողների հաջորդ սերնդի զարգացմանը: Front-end-ի մեր ինտենսիվ դասընթացը նախատեսված է զինելու ձեզ այն հմտություններով և գիտելիքներով, որոնք անհրաժեշտ են վեբ մշակման դինամիկ աշխարհում հաջողության հասնելու համար:",
            ge: "მოგესალმებით GeekLab-ში, სადაც ჩვენ ვზრდით front-end დეველოპერების მომავალ თაობას. ჩვენი Front-end დეველოპმენტის ბანაკი შექმნილია იმისთვის, რომ მოგაწოდოთ უნარები და ცოდნა, რომელიც საჭიროა ვებ Փეველოპმენტის დინამიურ სამყაროში წარმატების მისაღწევად."
        },
        faq: [
            {
                q: 'Արդյո՞ք վկայականը պետք է վերցնել մասնակցած ամբողջ դասընթացի համար:',
                a: 'Այո, վկայականը տրվում է ամբողջ դասընթացը հաջողությամբ ավարտելու դեպքում:'
            },
            {
                q: 'Արդյո՞ք ինձ անհրաժեշտ է ունենալ նախնական գիտելիքներ կամ փորձ այս դասընթացին մասնակցելու համար:',
                a: 'Ոչ, դասընթացը նախատեսված է սկսնակների համար:'
            },
            {
                q: 'Գրանցվելուց հետո ինչքա՞ն ժամանակ ունեմ վճարումը կատարելու համար:',
                a: 'Գրանցվելուց հետո վճարումը պետք է կատարել 3 օրվա ընթացքում:'
            }
        ],
        program: [
            {
                hy: 'Առաջին փուլ',
                en: 'Advanced JavaScript',
                ge: 'Advanced JavaScript'
            },
            {
                hy: 'Երկրորդ փուլ',
                en: 'Web Concepts in Depth',
                ge: 'Web Concepts in Depth'
            },
            {
                hy: 'Երրորդ փուլ',
                en: 'Chrome Dev Tools in Action',
                ge: 'Chrome Dev Tools in Action'
            },
            {
                hy: 'Չորրորդ փուլ',
                en: 'Web Product Design and Engineering',
                ge: 'Web Product Design and Engineering'
            }
        ]
    },
    {
        id: 5,
        slug: "Python-development",
        title: {
            en: "Python development",
            hy: "Python ծրագրավորում",
            ge: "Python დეველოპმენტი"
        },
        duration: "6 ",
        price: "55.000",
        Deadline: "15/07/2024",
        branchs:['georgia', 'armenia'],
        isWhite: false,
        content: {
            en: "Welcome to GeekLab, your ultimate destination for cutting-edge tech education. At GeekLab, we believe in empowering individuals with the skills they need to thrive in today's digital landscape.",
            hy: "Բարի գալուստ GeekLab, ձեր վերջնական նպատակակետը առաջատար տեխնոլոգիական կրթության համար: GeekLab-ում մենք հավատում ենք անհատներին հզորացնելու այն հմտություններով, որոնք նրանց անհրաժեշտ են այսօրվա թվային լանդշաֆտում հաջողության հասնելու համար:",
            ge: "მოგესალმებით GeekLab-ში, თქვენს საბოლოო დანიშნულების ადგილას უახლესი ტექნოლოგიური განათლებისთვის. GeekLab-ში ჩვენ გვჯერა, რომ ადამიანებს მივცეთ ის უნარები, რაც მათ სჭირდებათ დღევანდელ ციფრულ ლანდშაფტში წარმატების მისაღწევად."
        },
        faq: [
            { q: 'Is prior programming experience required?', a: 'No, this course is beginner-friendly.' },
            { q: 'What is the course duration?', a: '6 months.' }
        ],
        program: [
            { en: 'Python Basics', hy: 'Python-ի հիմունքներ', ge: 'Python-ის საფუძვლები' },
            { en: 'Data Structures', hy: 'Տվյալների կառուցվածքներ', ge: 'მონაცემთა სტრუქტურები' },
            { en: 'Web Development with Python', hy: 'Վեբ ծրագրավորում Python-ով', ge: 'ვებ დეველოპმენტი Python-ით' }
        ]
    },
    {
        id: 6,
        slug: "MANUAL-QA",
        title: {
            en: "MANUAL QA",
            hy: "MANUAL QA",
            ge: "MANUAL QA"
        },
        duration: "2 ",
        price: "55.000",
        Deadline: "15/07/2024",
        branchs:['georgia', 'armenia'],
        isWhite: false,
        content: {
            en: "Manual QA is an essential part of the software testing process where testers manually execute test cases without the use of automation tools. Manual QA ensures that software applications meet specified requirements, function correctly, and are free of defects before they are released to end-users.",
            hy: "Որակի ձեռքով ստուգումը (Manual QA) ծրագրային ապահովման թեստավորման գործընթացի կարևոր մասն է, որտեղ թեստավորողները ձեռքով են կատարում թեստային դեպքերը՝ առանց ավտոմատացման գործիքների օգտագործման: Manual QA-ն ապահովում է, որ ծրագրային հավելվածները համապատասխանում են սահմանված պահանջներին, աշխատում են ճիշտ և զերծ են թերություններից՝ նախքան դրանք վերջնական օգտագործողներին թողարկելը:",
            ge: "ხარისხის ხელით შემოწმება (Manual QA) არის პროგრამული უზრუნველყოფის ტესტირების პროცესის აუცილებელი ნაწილი, სადაც ტესტერები ხელით ასრულებენ სატესტო შემთხვევებს ავტომატიზაციის ხელსაწყოების გამოყენების გარეშე. Manual QA უზრუნველყოფს, რომ პროგრამული პროგრამები აკმაყოფილებს მითითებულ მოთხოვნებს, მუშაობს სწორად და არ არის დეფექტებისგან, სანამ ისინი საბოლოო მომხმარებლებს გამოუშვებენ."
        },
        faq: [
            { q: 'Is this course suitable for beginners?', a: 'Yes, no prior QA experience is required.' },
            { q: 'Will I get a certificate?', a: 'Yes, after successful completion.' }
        ],
        program: [
            { en: 'Introduction to QA', hy: 'QA-ի ներածություն', ge: 'QA-ის შესავალი' },
            { en: 'Manual Testing Techniques', hy: 'Ձեռքով թեստավորման տեխնիկաներ', ge: 'ხელით ტესტირების ტექნიკები' },
            { en: 'Bug Reporting', hy: 'Բագերի զեկուցում', ge: 'ბაგების რეპორტინგი' }
        ]
    },
    {
        id: 1,
        slug: "AutoCad",
        title: {
            en: "AutoCad",
            hy: "AutoCad",
            ge: "AutoCad"
        },
        duration: "3 ",
        price: "35.000 ",
        Deadline: "15/07/2024",
        branchs:['georgia', 'armenia'],
        isWhite: true,
        content: {
            en: "Our AutoCAD courses cover everything from the basics of navigation and drawing tools to advanced techniques for creating precise and intricate designs. You'll learn how to draft 2D plans, model in 3D, annotate drawings, and customize your workspace for maximum efficiency.",
            hy: "Մեր AutoCAD-ի դասընթացներն ընդգրկում են ամեն ինչ՝ սկսած նավիգացիայի և նկարչական գործիքների հիմունքներից մինչև ճշգրիտ և բարդ նմուշներ ստեղծելու առաջադեմ տեխնիկա: Դուք կսովորեք, թե ինչպես կազմել 2D պլաններ, մոդելավորել 3D ձևաչափով, ծանոթագրել գծագրերը և հարմարեցնել ձեր աշխատանքային տարածքը առավելագույն արդյունավետության համար:",
            ge: "ჩვენი AutoCAD-ის კურსები მოიცავს ყველაფერს, დაწყებული ნავიგაციისა და ხატვის ხელსაწყოების საფუძვლებიდან დაწყებული, ზუსტი და რთული დიზაინის შექმნის მოწინავე ტექნიკით დამთავრებული. თქვენ შეისწავლით თუ როგორ შეადგინოთ 2D გეგმები, მოდელირდეთ 3D-ში, მოაწეროთ ნახატები და მოარგოთ თქვენი სამუშაო სივრცე მაქსიმალური ეფექტურობისთვის."
        },
        faq: [
            { q: 'Do I need prior CAD experience?', a: 'No, this course starts from the basics.' },
            { q: 'Is software provided?', a: 'Guidance on installation is included.' }
        ],
        program: [
            { en: 'Navigation & Drawing Tools', hy: 'Նավիգացիա և նկարչական գործիքներ', ge: 'ნავიგაცია და ხატვის ხელსაწყოები' },
            { en: '2D Drafting', hy: '2D նախագծում', ge: '2D პროექტირება' },
            { en: '3D Modeling', hy: '3D մոդելավորում', ge: '3D მოდელირება' }
        ]
    },
    {
        id: 2,
        slug: "Interior-Design",
        title: {
            en: "Interior Design",
            hy: "Ինտերիերի դիզայն",
            ge: "ინტერიერის დიზაინი"
        },
        duration: "6 ",
        price: "50.000 ",
        Deadline: "15/07/2024",
        branchs:['georgia', 'armenia'],
        isWhite: false,
        content: {
            en: "Unlock the secrets of interior design with our expert-led courses. Explore the principles of design, color theory, space planning, and furniture arrangement to create harmonious and functional interiors.",
            hy: "Բացահայտեք ինտերիերի դիզայնի գաղտնիքները մեր փորձագետների կողմից վարվող դասընթացների միջոցով: Բացահայտեք դիզայնի, գունային տեսության, տարածության պլանավորման և կահույքի դասավորության սկզբունքները՝ ներդաշնակ և ֆունջցիոնալական ինտերիեր ստեղծելու համար:",
            ge: "გახსენით ინტერიერის დიზაინის საიდუმლოებები ჩვენი ექსპერტების ხელმძღვანელობით კურსებით. გამოიკვლიეთ დიზაინის პრინციპები, ფერის თეორია, სივრცის დაგეგმვა და ავეჯის მოწყობა ჰარმონიული და ფუნქციონალური ინტერიერის შესაქმნელად."
        },
        faq: [
            { q: 'Is this course project-based?', a: 'Yes, you will work on real interior design projects.' },
            { q: 'Are materials included?', a: 'A list of required materials will be provided.' }
        ],
        program: [
            { en: 'Design Principles', hy: 'Դիզայնի սկզբունքներ', ge: 'დიზაინის პრინციპები' },
            { en: 'Color Theory', hy: 'Գունային տեսություն', ge: 'ფერის თეორია' },
            { en: 'Space Planning', hy: 'Տարածության պլանավորում', ge: 'სივრცის დაგეგმვა' }
        ]
    },
    {
        id: 3,
        slug: "Rhinoceros",
        title: {
            en: "Rhinoceros",
            hy: "Rhinoceros",
            ge: "Rhinoceros"
        },
        duration: "3 ",
        price: "100.000 ",
        Deadline: "15/07/2024",
        branchs:['georgia', 'armenia'],
        isWhite: false,
        content: {
            en: "Rhinoceros, commonly known as Rhino, is a versatile 3D modeling tool renowned for its flexibility and precision. Whether you're sculpting organic forms, designing intricate architectural structures, or engineering complex mechanical parts, Rhino provides the tools you need to bring your ideas to life with unparalleled accuracy and efficiency.",
            hy: "Rhinoceros-ը, որը հայտնի է որպես Rhino, բազմակողմանի 3D մոդելավորման գործիք է, որը հայտնի է իր ճկունությամբ և ճշգրտությամբ: Անկախ նրանից, թե դուք քանդակում եք օրգանական ձևեր, նախագծում եք բարդ ճարտարապետական կառույցներ, թե մշակում եք բարդ մեխանիկական մասեր, Rhino-ն տրամադրում է ձեզ անհրաժեշտ գործիքները՝ ձեր գաղափարներն անզուգական ճշգրտությամբ և արդյունավետությամբ կյանքի կոչելու համար:",
            ge: "Rhinoceros, საყოველთაოდ ცნობილი როგორც Rhino, არის მრავალმხრივი 3D მოდელირების ინსტრუმენტი, რომელიც ცნობილია თავისი მოქნილობითა და სიზუსტით. მიუხედავად იმისა, თქვენ ძერწავთ ორგანულ ფორმებს, აპროექტებთ რთულ არქიტექტურულ სტრუქტურებს, თუ აპროექტებთ რთულ მექანიკურ ნაწილებს, Rhino გაძლევთ ინსტრუმენტებს, რომლებიც გჭირდებათ თქვენი იდეების განსახორციელებლად შეუდარებელი სიზუსტითა და ეფექტურობით."
        },
        faq: [
            { q: 'Is Rhino used in architecture?', a: 'Yes, it is widely used for architectural modeling.' },
            { q: 'Do I need 3D experience?', a: 'No prior 3D experience is required.' }
        ],
        program: [
            { en: 'Rhino Basics', hy: 'Rhino-ի հիմունքներ', ge: 'Rhino-ის საფუძვლები' },
            { en: 'Architectural Modeling', hy: 'Ճարտարապետական մոդելավորում', ge: 'არქიტექტურული მოდელირება' },
            { en: 'Mechanical Parts', hy: 'Մեխանիկական մասեր', ge: 'მექანიკური ნაწილები' }
        ]
    },

];

export const getLessons = () => {
    if (typeof window !== 'undefined') {
        const branch = localStorage.getItem('branch');
        if (branch) {
            return lessons.filter(lesson => lesson.branchs.includes(branch));
        }
    }
    return lessons;
};

export const portfolios = [
    {id: 1, image: "/eua.png", title: "European University of Armenia", path:"https://eua.am/"},
    {id: 2, image: "/poel.png", title: "Peol", path: "https://www.poel.am/home"},
    {id: 3, image: "/cool.png", title: "Cool language Center", path: "https://cool-ruby.vercel.app/en"},
    {id: 4, image: "/trichq.png", title: "Թռիչք արշավական ակումբ", path: "https://www.trichq.am/"},
    {id: 5, image: "/infinite.png", title: "Infinite", path: "https://infinitestyle.net/"},
    {id: 6, image: "/5.png", title: "ԴԱՀԿ", path: "https://www.dahk.am/"},
]

export const designPortfolios = [
    {id: 1, image: "https://ellara.geeklab.am/storage/geeklab/bath%201.jpg"},
    {id: 2, image: "https://ellara.geeklab.am/storage/geeklab/cam001.jpg"},
    {id: 3, image: "https://ellara.geeklab.am/storage/geeklab/Cam%20004.jpg"},
    {id: 4, image: "https://ellara.geeklab.am/storage/geeklab/cam%20006.jpg"},
    {id: 5, image: "https://ellara.geeklab.am/storage/geeklab/master-5.jpg"},
    {id: 6, image: "https://ellara.geeklab.am/storage/geeklab/kid%20cam%201.jpg"},
]

export const menuItems = [
    {
        key: 'dashboard',
        icon: <DashboardOutlined />,
        label: 'Dashboard',
        path: '/profile/dashboard',
    },
    {
        key: 'my-groups',
        icon: <TeamOutlined />,
        label: 'My Groups',
        children: [
            {
                key: 'all-groups',
                label: 'All Groups',
                path: '/profile/groups/all',
            },
            {
                key: 'add-group',
                label: 'Add Group',
                path: '/profile/groups/add',
            },
            {
                key: 'add-student',
                label: 'Add Student',
                path: '/profile/students/add',
            },
        ],
    },
    {
        key: 'my-lessons',
        icon: <BookOutlined />,
        label: 'My Lessons',
        children: [
            {
                key: 'all-lessons',
                label: 'All Lessons',
                path: '/profile/lessons/all',
            },
            {
                key: 'add-lesson',
                label: 'Add Lesson',
                path: '/profile/lessons/add',
            },
        ],
    },
    {
        key: 'homeworks',
        icon: <FileOutlined />,
        label: 'Homeworks',
        path: '/profile/homeworks',
    },
    {
        key: 'all-students',
        icon: <UserOutlined />,
        label: 'All Students',
        path: '/profile/students',
    },
];

