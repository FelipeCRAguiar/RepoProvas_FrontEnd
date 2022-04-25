import { AspectRatio } from "@mui/icons-material";
import axios from "axios";

const Base_URL = "http://localhost:5000/"

export async function getAllCategoriesWithTeachers() {
  
  const categories = await axios.get(`${Base_URL}/category-teacher`)

  return categories.data
}

export async function getAllCategoriesWithDisciplines() {
  
  const categories = await axios.get(`${Base_URL}/category-discipline`)

  return categories.data
}

export async function getAllTeachers() {
  
  const teachers = await axios.get(`${Base_URL}/teacher`)

  return teachers.data
}

export async function getAllTerms() {
  
  const terms = await axios.get(`${Base_URL}/term`)

  return terms.data
}

export async function getAllDisciplines() {
  
  const disciplines = await axios.get(`${Base_URL}/discipline`)

  return disciplines.data
}