import {createSlice} from "@reduxjs/toolkit";

const books = [
    [
        {
          "id": "62db1126-6ec7-4927-b616-51e09219d11b",
          "slug": "annual-report-ontario-human-rights-commission",
          "name": "Annual report - Ontario Human Rights Commission",
          "author": "Ontario Human Rights Commission",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/62db1126-6ec7-4927-b616-51e09219d11b.webp",
          "page": 102,
          "release_year": 1999,
          "file_size": 7.2,
          "downloaded_count": 14,
          "language": "English",
          "status": 1
        },
        {
          "id": "9c25a6b8-12d6-46d9-805a-6dce0f17692a",
          "slug": "beltsville-human-nutrition-research-center",
          "name": "Beltsville Human Nutrition Research Center",
          "author": "Beltsville Human Nutrition Research Center",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/9c25a6b8-12d6-46d9-805a-6dce0f17692a.webp",
          "page": 140,
          "release_year": 1992,
          "file_size": 4.5,
          "downloaded_count": 2,
          "language": "English",
          "status": 1
        },
        {
          "id": "c321e7b7-b8ee-422a-bd28-9df1aeeed3a8",
          "slug": "as-if-i-am-not-human-abuses-against-asian-domestic-workers-in-saudi-arabia",
          "name": "As If I Am Not Human: Abuses Against Asian Domestic Workers in Saudi Arabia",
          "author": "Human Rights Watch",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/c321e7b7-b8ee-422a-bd28-9df1aeeed3a8.webp",
          "page": 137,
          "release_year": 2009,
          "file_size": 0.46,
          "downloaded_count": 4,
          "language": "English",
          "status": 1
        },
        {
          "id": "77a20d9f-ccbe-487d-b2ab-516f73663a47",
          "slug": "human-biology-reproduction",
          "name": "Human Biology - Reproduction",
          "author": "The Program in Human Biology, Stanford University",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/77a20d9f-ccbe-487d-b2ab-516f73663a47.webp",
          "page": null,
          "release_year": 2011,
          "file_size": 26.6,
          "downloaded_count": 204,
          "language": "English",
          "status": 1
        },
        {
          "id": "4d08245a-7609-42d3-ac49-adf68e9dff26",
          "slug": "contemporary-ergonomics-and-human-factors",
          "name": "Contemporary ergonomics and human factors",
          "author": "Institute of Ergonomics & Human Factors. Conference",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/4d08245a-7609-42d3-ac49-adf68e9dff26.webp",
          "page": 632,
          "release_year": 2010,
          "file_size": 2.611,
          "downloaded_count": 13,
          "language": "English",
          "status": 1
        },
        {
          "id": "9b3d212d-be4b-40d1-b3d4-9b986467b551",
          "slug": "annual-report-of-the-human-genetics-commission-2001",
          "name": "Annual report of the Human Genetics Commission : 2001",
          "author": "Great Britain. Human Genetics Commission",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/9b3d212d-be4b-40d1-b3d4-9b986467b551.webp",
          "page": 60,
          "release_year": 2001,
          "file_size": 5.1,
          "downloaded_count": 6,
          "language": "English",
          "status": 1
        },
        {
          "id": "322fe9b6-2d42-4e8e-9c7b-6b5f55c547e0",
          "slug": "annual-report-of-the-human-genetics-commission-2002",
          "name": "Annual report of the Human Genetics Commission : 2002",
          "author": "Great Britain. Human Genetics Commission",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/322fe9b6-2d42-4e8e-9c7b-6b5f55c547e0.webp",
          "page": 48,
          "release_year": 2002,
          "file_size": 4.4,
          "downloaded_count": 9,
          "language": "English",
          "status": 1
        },
        {
          "id": "38f10f9a-29ad-46b8-8e62-691026697733",
          "slug": "human-rights-complaint-form-and-guide-0",
          "name": "Human rights complaint form and guide",
          "author": "Alberta Human Rights and Citizenship Commission",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/38f10f9a-29ad-46b8-8e62-691026697733.webp",
          "page": 12,
          "release_year": 1999,
          "file_size": 2.8,
          "downloaded_count": 13,
          "language": "English",
          "status": 1
        },
        {
          "id": "b00949a8-830d-49e4-aad7-0234b97a7496",
          "slug": "mexico-mexicos-national-human-rights-commission-a-critical-assessment",
          "name": "Mexico : Mexico's national human rights commission : a critical assessment",
          "author": "Human Rights Watch (Organization)",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/b00949a8-830d-49e4-aad7-0234b97a7496.webp",
          "page": 132,
          "release_year": 2008,
          "file_size": 0.724,
          "downloaded_count": 0,
          "language": "English",
          "status": 1
        },
        {
          "id": "5d5ccc57-762f-4433-9b76-036712264cff",
          "slug": "annual-report-of-the-human-genetics-commission-2005-2006",
          "name": "Annual report of the Human Genetics Commission : 2005-2006",
          "author": "Great Britain. Human Genetics Commission",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/5d5ccc57-762f-4433-9b76-036712264cff.webp",
          "page": null,
          "release_year": 2006,
          "file_size": 5.2,
          "downloaded_count": 1,
          "language": "English",
          "status": 1
        },
        {
          "id": "215aacf3-a8e1-4667-bcf6-adf68bae9e13",
          "slug": "human-biology-lives-of-cells",
          "name": "Human Biology - Lives of Cells",
          "author": "The Program in Human Biology, Stanford University",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/215aacf3-a8e1-4667-bcf6-adf68bae9e13.webp",
          "page": null,
          "release_year": 2011,
          "file_size": 35.7,
          "downloaded_count": 113,
          "language": "English",
          "status": 1
        },
        {
          "id": "e835d8a7-3bd8-4693-a4b7-a35bfbdd7b6f",
          "slug": "human-services-serving-seniors-veterans-and-those-with-disabilities",
          "name": "Human services : serving seniors, veterans, and those with disabilities",
          "author": "Illinois. Dept. of Human Services",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/e835d8a7-3bd8-4693-a4b7-a35bfbdd7b6f.webp",
          "page": 16,
          "release_year": 1993,
          "file_size": 0.55,
          "downloaded_count": 2,
          "language": "English",
          "status": 1
        },
        {
          "id": "bc6f35f3-abf5-42b6-83ce-b6830bf12050",
          "slug": "accountability-in-human-resource-management-pdf",
          "name": "Accountability in Human Resource Management",
          "author": "Jack J. Phillips PhD in Human Resource Management.",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/bc6f35f3-abf5-42b6-83ce-b6830bf12050.webp",
          "page": 362,
          "release_year": 1996,
          "file_size": 16.29,
          "downloaded_count": 212,
          "language": "English",
          "status": 1
        },
        {
          "id": "1b126bd7-2573-4815-ac4f-99a80b51cd15",
          "slug": "the-human-rights-complaint-process-a-guide-for-respondents",
          "name": "The human rights complaint process : a guide for respondents",
          "author": "Alberta Human Rights and Citizenship Commission",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/1b126bd7-2573-4815-ac4f-99a80b51cd15.webp",
          "page": null,
          "release_year": 2005,
          "file_size": 2.6,
          "downloaded_count": 13,
          "language": "English",
          "status": 1
        },
        {
          "id": "432247ec-afb4-47c3-8376-d3fce6bbfb23",
          "slug": "advanced-human-resource-data-in-the-commonwealths-information-warehouse",
          "name": "Advanced human resource data in the Commonwealth's information warehouse",
          "author": "Massachusetts. Human Resources Division. Training Unit",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/432247ec-afb4-47c3-8376-d3fce6bbfb23.webp",
          "page": 116,
          "release_year": 1999,
          "file_size": 4,
          "downloaded_count": 1,
          "language": "English",
          "status": 1
        },
        {
          "id": "3f421861-f90a-4b55-ad4e-0e908569b76b",
          "slug": "the-human-rights-complaint-process-a-guide-for-complainants",
          "name": "The human rights complaint process : a guide for complainants",
          "author": "Alberta Human Rights and Citizenship Commission",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/3f421861-f90a-4b55-ad4e-0e908569b76b.webp",
          "page": null,
          "release_year": 2005,
          "file_size": 2.7,
          "downloaded_count": 17,
          "language": "English",
          "status": 1
        },
        {
          "id": "2f32d49b-8b13-427c-8848-3ae4bd5712dc",
          "slug": "drawing-the-map-of-life-inside-the-human-genome-project-0",
          "name": "Drawing the map of life: inside the Human Genome Project",
          "author": "Human Genome Project;McElheny, Victor K",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/2f32d49b-8b13-427c-8848-3ae4bd5712dc.webp",
          "page": 402,
          "release_year": 2012,
          "file_size": 1.971,
          "downloaded_count": 1,
          "language": "English",
          "status": 1
        },
        {
          "id": "64fe8e72-8a08-4926-8597-776daa3b38ed",
          "slug": "neko-zamurai-manualscanjpplaystationpsx",
          "name": "Neko Zamurai (Manual)(Scan)(JP)(PlayStation)(PSX)",
          "author": "HUMAN",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/64fe8e72-8a08-4926-8597-776daa3b38ed.webp",
          "page": 16,
          "release_year": 1999,
          "file_size": 4.9,
          "downloaded_count": 0,
          "language": "Japanese",
          "status": 1
        },
        {
          "id": "d9015edf-87f5-4cb6-97b4-b8cabbece0e5",
          "slug": "equality-and-human-rights-commission-strategic-plan-2012-15",
          "name": "Equality and Human Rights Commission strategic plan 2012-15",
          "author": "Equality and Human Rights Commission (Great Britain)",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/d9015edf-87f5-4cb6-97b4-b8cabbece0e5.webp",
          "page": null,
          "release_year": 2012,
          "file_size": 0.51,
          "downloaded_count": 30,
          "language": "English",
          "status": 1
        },
        {
          "id": "f046285d-ad46-4bd7-bae1-88c5b456daf5",
          "slug": "directory-of-usda-human-nutrition-activities",
          "name": "Directory of USDA human nutrition activities",
          "author": "Policy and Coordination Council (U.S.). Subcommittee for Human Nutrition",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/f046285d-ad46-4bd7-bae1-88c5b456daf5.webp",
          "page": 42,
          "release_year": 1992,
          "file_size": 1.6,
          "downloaded_count": 2,
          "language": "English",
          "status": 1
        },
        {
          "id": "dc0cc07f-b8aa-46d0-bb5f-0f792ff39f2b",
          "slug": "advisory-committee-on-human-radiation-experiments-final-report",
          "name": "Advisory Committee on Human Radiation Experiments : final report",
          "author": "United States. Advisory Committee on Human Radiation Experiments",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/dc0cc07f-b8aa-46d0-bb5f-0f792ff39f2b.webp",
          "page": null,
          "release_year": 1995,
          "file_size": 30.3,
          "downloaded_count": 5,
          "language": "English",
          "status": 1
        },
        {
          "id": "6d6c164c-66e4-4106-b032-5eb4cc19bebc",
          "slug": "health-and-wellness-for-life-with-online-study-guide-0",
          "name": "Health and Wellness for Life with Online Study Guide",
          "author": "Human Kinetics",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/6d6c164c-66e4-4106-b032-5eb4cc19bebc.webp",
          "page": 980,
          "release_year": 2009,
          "file_size": 40.882,
          "downloaded_count": 5,
          "language": "English",
          "status": 1
        },
        {
          "id": "7fb18c77-c20c-4d1b-ae49-4065595a3e69",
          "slug": "the-human-resources-scorecard-measuring-the-return-on-investment-improving-human-performance-pdf",
          "name": "The Human Resources Scorecard: Measuring the Return on Investment (Improving Human Performance)",
          "author": "Jack J. Phillips PhD in Human Resource Management., Ron Stone, Patricia Phillips",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/7fb18c77-c20c-4d1b-ae49-4065595a3e69.webp",
          "page": 537,
          "release_year": 2001,
          "file_size": 3.27,
          "downloaded_count": 38,
          "language": "English",
          "status": 1
        },
        {
          "id": "49f29ba7-a8fd-4c39-8a49-fcae0a7d36e5",
          "slug": "montana-department-of-public-health-and-human-services-tribal-update-electronic-resource-0",
          "name": "Montana Department of Public Health and Human Services tribal update [electronic resource]",
          "author": "Montana.Dept. of Public Health and Human Services",
          "thumbnail": "https://cdn.pdfdrive.to/media/content/thumbnails/49f29ba7-a8fd-4c39-8a49-fcae0a7d36e5.webp",
          "page": null,
          "release_year": 2004,
          "file_size": 0.3,
          "downloaded_count": 2,
          "language": "English",
          "status": 1
        }
      ]
]

const bookReducer = createSlice({
    name: "books",
    initialState: books,
    reducers: {
        setBooks: (state, action) => {
            return state = [
                ...action.payload
            ]
        }
    }
})

export default bookReducer.reducer
export const {setBooks} = bookReducer.actions