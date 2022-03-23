const days = [
    {
        id: 1,
        day: "ПН",
        subj: [
            {
                subjectNameOdd: "ИСИТ (лекция)",
                subjectNameEven: "ИСИТ (лекция)",
                time: "11:40 - 13:05",
                place: "",
                cab: "ДО",
                id: 11,
            },
            {
                subjectNameOdd: "Программная инженерия (практика)",
                subjectNameEven: "Программная инженерия (практика)",
                time: "13:45 - 15:10",
                place: "",
                cab: "ДО",
                id: 12,
            },
            {
                subjectNameOdd: "Прикладной дизайн (практика)",
                subjectNameEven: "Прикладной дизайн (практика)",
                time: "15:20 - 16:45",
                place: "",
                cab: "ДО",
                id: 13,
            }
        ]
    },
    {
        id: 2,
        day: "ВТ",
            subj: [{
                subjectNameOdd: "",
                subjectNameEven: "Производственная практика",
                time: "10:05 - 11:30",
                place: "Вознес",
                cab: "ПТД",
                id: 21,
            },
            {
                subjectNameOdd: "",
                subjectNameEven: "Производственная практика",
                time: "11:40 - 13:05",
                place: "Вознес",
                cab: "ПТД",
                id: 22,
            },
            {
                subjectNameOdd: "",
                subjectNameEven: "Физра",
                time: "13:45 - 15:10",
                place: "Вознес",
                cab: "Спортич",
                id: 23,
            },
            {
                subjectNameOdd: "Выпей чай и отдохни, лапочка",
                subjectNameEven: "",
                time: "Весь день",
                place: "",
                cab: "",
                id: 24,
            }
        ]
    },
    {
        id: 3,
        day: "СР",
        subj: [
            {
                subjectNameOdd: "Физра",
                subjectNameEven: "Физра",
                time: "11:40 - 13:05",
                place: "Адмиралтейская",
                cab: "Спортич",
                id: 31,
            },
            {
                subjectNameOdd: "Мультимедия (лекция)",
                subjectNameEven: "Разработка IT-проекта (лекция)",
                time: "13:45 - 15:10",
                place: "Вознес",
                cab: "452 каб.",
                id: 32,
            },
            {
                subjectNameOdd: "Разработка IT-проекта (практика)",
                subjectNameEven: "Разработка IT-проекта (практика)",
                time: "15:20 - 16:45",
                place: "Вознес",
                cab: "484 каб.",
                id: 33,
            },
            {
                subjectNameOdd: "ИСИТ (практика)",
                subjectNameEven: "ИСИТ (практика)",
                time: "16:55 - 18:20",
                place: "Вознес",
                cab: "459 каб.",
                id: 34,
            }
        ]
    },
    {
        id: 4,
        day: "ЧТ",
        subj: [{
                subjectNameOdd: "Психология пользователя (лекция)",
                subjectNameEven: "Программная инженерия (лекция)",
                time: "10:05 - 11:30",
                place: "",
                cab: "ДО",
                id: 41,
            },
            {
                subjectNameOdd: "Веб-дизайн (лекция)",
                subjectNameEven: "Прикладной дизайн (лекция)",
                time: "11:40 - 13:05",
                place: "",
                cab: "ДО",
                id: 42,
            },
            {
                subjectNameOdd: "",
                subjectNameEven: "Окошечко, отдыхай",
                time: "13:45 - 15:10",
                place: "",
                cab: "ДО",
                id: 43,
            },
            {
                subjectNameOdd: "",
                subjectNameEven: "Психология пользователя (практика)",
                time: "15:20 - 16:45",
                place: "",
                cab: "ДО",
                id: 44,
            }
        ]
    },
    {
        id: 5,
        day: "ПТ",
        subj: [{
                subjectNameOdd: "Выпей чай и отдохни, лапочка",
                subjectNameEven: "Выпей чай и отдохни, лапочка",
                time: "Целый день",
                place: "",
                cab: "",
                id: 51,
            }
        ]
    },
    {
        id: 6,
        day: "СБ",
        subj: [
            {
                subjectNameOdd: "Веб-дизайн (практика)",
                subjectNameEven: "Веб-дизайн (практика)",
                time: "11:40 - 13:05",
                place: "Вознес",
                cab: "ПТД",
                id: 61,
            },
            {
                subjectNameOdd: "Мультимедия (практика)",
                subjectNameEven: "Мультимедия (практика)",
                time: "13:45 - 15:10",
                place: "Вознес",
                cab: "459 каб",
                id: 62,
            }
        ]
    },
    {
        id: 0,
        day: "ВС",
        subj: [{
                subjectNameOdd: "нет пар",
                subjectNameEven: "нет пар",
                time: "",
                place: "",
                cab: "",
                id: 10,
            }
        ]
    }
]

export default days;