"use client";

import {
  IconBackpack,
  IconBriefcase,
  IconSchool,
  TablerIcon,
} from "@tabler/icons";
import { ReactElement } from "react";

export const NAME = "Gus";

export interface IProfileInfo {
  icon: ReactElement<any, any>;
  top: string;
  title: string;
  subtitle: string;
}

export const ProfileInfo: IProfileInfo[] = [
  {
    icon: <IconBackpack size={36} />,
    top: "Graduated Highschool",
    title: "Prasarnmit Demonstration School (Secondary)",
    subtitle: "Information Technology Major",
  },
  {
    icon: <IconBriefcase size={36} />,
    top: "Interned for 385 hours",
    title: "Siriraj Informatics and Data Innovation Center",
    subtitle: "Health Informic (Frontend)",
  },
  {
    icon: <IconSchool size={36} />,
    top: "Studying 1st year",
    title: "King Mongkut's Institute of Technology Ladkrabang",
    subtitle: "School of Information Technology",
  },
];
