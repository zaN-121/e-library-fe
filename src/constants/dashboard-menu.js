import {ICONS} from "./index";

const MENU = [
    {
        name: "Book",
        icon: ICONS.book,
        subMenu: [
            {
                name: "Add Book",
                icon: ICONS.add,
            }
        ]
    },
    {
        name: "Borrowing",
        icon: ICONS.borrowing,
        subMenu: [
            {
                name: "Can Be Taken",
                icon: ICONS.wait
            },
            {
                name: "Taken",
                icon: ICONS.approved
            },
            {
                name: "Late",
                icon: ICONS.late
            },
            {
                name: "History",
                icon: ICONS.history
            }
        ]
    }
]

export {MENU}