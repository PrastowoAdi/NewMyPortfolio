/* eslint-disable import/prefer-default-export */
import axios from "axios";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function getSkillSection() {
  const URL = "halaman-utama/skill";

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse;
}
