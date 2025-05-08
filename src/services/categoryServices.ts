import { Category } from '../models/Category'

export const categoryService = {
    findAllPaginated: async (page: number, perPage: number) => {
        const offset = (page - 1) * perPage

        try {
            const { count, rows } = await Category.findAndCountAll({
                attributes: ['id', 'name', 'position'],
                order: [['position', 'ASC']],
                limit: perPage,
                offset: offset,
            })
            return {
                categories: rows,
                page,
                perPage,
                total: count,
            }
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            }
        }
    },

    findByIdWithCourses: async (id: string) => {
        try {
            const categoryWithCourses = await Category.findByPk(id, {
                attributes: ['id', 'name'],
                include: [
                    {
                        association: 'courses',
                        attributes: [
                            'id', 
                            'name',
                            'synopsis',
                            'thumbnail_url', 'thumbnailUrl',
                        ],
                    },
                ],
            })

            return categoryWithCourses
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            }
        }
    },
    
}
