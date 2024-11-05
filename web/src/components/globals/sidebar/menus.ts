import { ReactNode } from "react";
import { FiBookOpen, FiMap, FiPackage, FiSliders } from "react-icons/fi"

export interface ILinkMenu {
    title: string;
    url: string;
    icon: any;
    subLinks?: ILinkMenu[]
}

export interface IMenu {
    groupName: string;
    groupLink: string;
    links: ILinkMenu[]
}

export const menus: IMenu[] = [
    {
        groupName: "Tutoriais",
        groupLink: "/",
        links: [
            {
                title: "Mapeamentos",
                url: "/tutorials/mappers",
                icon: FiMap,
                subLinks: [
                    {
                        title: "Preparando mapa para o builder",
                        url: "/tutorials/mappers/preparando-mapa-para-o-builder",
                        icon: FiBookOpen,
                    }
                ]
            },
            {
                title: "Produção",
                url: "/tutorials/production",
                icon: FiPackage,
                subLinks: []
            },
            {
                title: "Validação",
                url: "/tutorials/validation",
                icon: FiSliders,
                subLinks: []
            },
        ]
    }
]