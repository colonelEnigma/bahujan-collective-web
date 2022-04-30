import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FiTwitter, FiFacebook } from "react-icons/fi";

export const contacts = [
  {
    channel: "Instagram",
    url: "https://www.instagram.com/bahujancollective",
    icon: AiOutlineInstagram,
  },
  {
    channel: "Twitter",
    url: "https://twitter.com/bahujanCollect",
    icon: FiTwitter,
  },
  {
    channel: "YouTube",
    url: "https://www.youtube.com/user/KnowRealIndia",
    icon: AiOutlineYoutube,
  },
  // { channel: "FaceBook", url: "", icon: FiFacebook },
  {
    channel: "Mail",
    url: "mailto:opsmanager.bahujancollective@gmail.com",
    icon: AiOutlineMail,
  },
];
