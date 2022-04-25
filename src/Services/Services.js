import * as api from "../Api/api";

export async function organizeDisciplineData() {
  
  const categories = await api.getAllCategoriesWithTeachers()

  const terms = await api.getAllTerms()

  const teachers = await api.getAllTeachers()

  const data = terms.map(term => {
    return {
      termId: term.id,
      termNumber: term.number,
      disciplines: term.disciplines.map(discipline => {
        return {
          disciplineId: discipline.id,
          disciplineName: discipline.name,
          teacherDisciplines: discipline.teacherDisciplines.map(teacherDiscipline => {
            return {
              categories: categories.map(category => {
                return {
                  categoryId: category.id,
                  categoryName: category.name,
                  tests: category.tests.filter(test => test.teacherDisciplineId === teacherDiscipline.id).map(test => {
                    return {
                      testId: test.id,
                      testName: test.name,
                      testPDFUrl: test.pdfUrl,
                      teacher: teachers.filter(teacher => teacher.id === teacherDiscipline.teacherId)
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  })

  return data
}

export async function organizeTeacherData() {
  
  const categories = await api.getAllCategoriesWithDisciplines()

  const teachers = await api.getAllTeachers()

  const disciplines = await api.getAllDisciplines()

  const data = teachers.map(teacher => {
    return {
      teacherId: teacher.id,
      teacherName: teacher.name,
      teacherDisciplines: teacher.teacherDisciplines.map(teacherDiscipline => {
        return {
          categories: categories.map(category => {
            return {
              categoryId: category.id,
              categoryName: category.name,
              tests: category.tests.filter(test => test.teacherDisciplineId === teacherDiscipline.id).map(test => {
                return {
                  testId: test.id,
                  testName: test.name,
                  testPDFUrl: test.pdfUrl,
                  discipline: disciplines.filter(discipline => discipline.id === teacherDiscipline.id)
                }
              })
            }
          })
        }
      })
    }
  })

  return data
}