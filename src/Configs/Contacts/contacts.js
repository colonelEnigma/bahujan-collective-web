import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FiTwitter, FiFacebook } from "react-icons/fi";

export const contacts = [
  {
    channel: "Mail",
    url: "mailto:opsmanager.bahujancollective@gmail.com",
    icon: AiOutlineMail,
  },
  {
    channel: "Twitter",
    url: "https://twitter.com/bahujanCollect",
    icon: FiTwitter,
  },
  {
    channel: "Instagram",
    url: "https://www.instagram.com/bahujancollective",
    icon: AiOutlineInstagram,
  },
  { channel: "FaceBook", url: "", icon: FiFacebook },
  {
    channel: "YouTube",
    url: "https://www.youtube.com/user/KnowRealIndia",
    icon: AiOutlineYoutube,
  },
];
