export type GalleryItemType = {
    name: string,
    year: number,
    section: "paints" | "sculptures",
    mainImage: string,
    images: string[],
    dimensions: [number, number, number?] | null
}

const gallery: GalleryItemType[] = [
    {
        name: "Leisure",
        year: 2022,
        section: "paints",
        mainImage: "leisure-1-2022.jpg",
        images: ["leisure-1-2022.jpg", "leisure-2-2022.jpg"],
        dimensions: [40, 30, 1.5]
    },
    {
        name: "Lilly",
        year: 2022,
        section: "paints",
        mainImage: "lilly-1-2022.jpg",
        images: ["lilly-1-2022.jpg"],
        dimensions: [30,30]
    },
    {
        name: "Lotus Decay",
        year: 2022,
        section: "paints",
        mainImage: "lotus_decay-1-2022.jpg",
        images: ["lotus_decay-1-2022.jpg", "lotus_decay-2-2022.jpg"],
        dimensions: [30,30]
    },
    {
        name: "Portrait Dissection #17",
        year: 2023,
        section: "paints",
        mainImage: "portrait_dissection_17-1-2023.png",
        images: ["portrait_dissection_17-1-2023.png"],
        dimensions: [48, 48]
    },
    {
        name: "Portrait Dissection #18",
        year: 2023,
        section: "paints",
        mainImage: "portrait_dissection_18-1-2023.png",
        images: ["portrait_dissection_18-1-2023.png"],
        dimensions: [48, 48]
    },
    {
        name: "Portrait Dissection #19",
        year: 2023,
        section: "paints",
        mainImage: "portrait_dissection_19-1-2023.png",
        images: ["portrait_dissection_19-1-2023.png"],
        dimensions: [48, 48]
    },
    {
        name: "Susurro (Whisper)",
        year: 2022,
        section: "paints",
        mainImage: "susurro_whisper-1-2022.png",
        images: ["susurro_whisper-1-2022.png", "susurro_whisper-2-2022.png"],
        dimensions: [40, 30, 1.5]
    },
    {
        name: "Sweetgum Beauty",
        year: 2022,
        section: "paints",
        mainImage: "sweetgum_beauty-1-2022.jpg",
        images: ["sweetgum_beauty-1-2022.jpg", "sweetgum_beauty-2-2022.jpg"],
        dimensions: [30, 30]
    },
    {
        name: "Untitled #1",
        year: 2015,
        section: "paints",
        mainImage: "untitled_1-1-2015.png",
        images: ["untitled_1-1-2015.png", "untitled_1-2-2015.png"],
        dimensions: [40, 30, 1.5]
    },
    {
        name: "Untitled #38",
        year: 2018,
        section: "paints",
        mainImage: "untitled_38-1-2018.png",
        images: ["untitled_38-1-2018.png"],
        dimensions: [40, 30, 2]
    },
    {
        name: "Untitled #39",
        year: 2018,
        section: "paints",
        mainImage: "untitled_39-1-2018.png",
        images: ["untitled_39-1-2018.png", "untitled_39-2-2018.png"],
        dimensions: [40, 30, 2]
    },
    {
        name: "Wire Mesh #6",
        year: 2022,
        section: "sculptures",
        mainImage: "wm_6-1-2022.png",
        images: ["wm_6-1-2022.png"],
        dimensions: null
    },
    {
        name: "Wire Mesh #7",
        year: 2022,
        section: "sculptures",
        mainImage: "wm_7-1-2022.png",
        images: ["wm_7-1-2022.png"],
        dimensions: null
    },
    {
        name: "Wire Mesh #8",
        year: 2022,
        section: "sculptures",
        mainImage: "wm_8-1-2022.png",
        images: ["wm_8-1-2022.png"],
        dimensions: null
    },
    {
        name: "Wire Mesh #33",
        year: 2022,
        section: "sculptures",
        mainImage: "wm_33-1-2022.png",
        images: ["wm_33-1-2022.png"],
        dimensions: [40, 18, 5]
    },
    {
        name: "Wire Mesh #34",
        year: 2022,
        section: "sculptures",
        mainImage: "wm_34-1-2022.png",
        images: ["wm_34-1-2022.png"],
        dimensions: [40, 18, 5]
    },
    {
        name: "Wire Mesh #35",
        year: 2022,
        section: "sculptures",
        mainImage: "wm_35-1-2022.png",
        images: ["wm_35-1-2022.png"],
        dimensions: [44, 17, 5.5]
    },
    {
        name: "Wire Mesh #45",
        year: 2023,
        section: "sculptures",
        mainImage: "wm_45-1-2023.png",
        images: ["wm_45-1-2023.png"],
        dimensions: [18, 8, 5]
    },
    {
        name: "Wire Mesh #47",
        year: 2023,
        section: "sculptures",
        mainImage: "wm_47-1-2023.png",
        images: ["wm_47-1-2023.png"],
        dimensions: [21, 49, 2]
    },
    {
        name: "Wire Mesh #48",
        year: 2023,
        section: "sculptures",
        mainImage: "wm_48-1-2023.png",
        images: ["wm_48-1-2023.png", "wm_48-2-2023.png"],
        dimensions: [14, 43, 7.5]
    },
    {
        name: "Wire Mesh #61",
        year: 2023,
        section: "sculptures",
        mainImage: "wm_61-1-2023.png",
        images: ["wm_61-1-2023.png"],
        dimensions: [48, 10, 5]
    },
    {
        name: "Wire Mesh #63",
        year: 2023,
        section: "sculptures",
        mainImage: "wm_63-1-2023.png",
        images: ["wm_63-1-2023.png", "wm_63-2-2023.png"],
        dimensions: [53, 11, 3.3]
    },
    {
        name: "Wire Mesh #69",
        year: 2023,
        section: "sculptures",
        mainImage: "wm_69-1-2023.png",
        images: ["wm_69-1-2023.png", "wm_69-2-2023.png"],
        dimensions: null
    },
    {
        name: "Wire Mesh #70",
        year: 2023,
        section: "sculptures",
        mainImage: "wm_70-1-2023.png",
        images: ["wm_70-1-2023.png", "wm_70-2-2023.png"],
        dimensions: null
    }
]

export default gallery