import { ResourceOptions } from "adminjs";

export const categoryResourceOptions: ResourceOptions = {
    navigation: 'Catálogo',
    editProperties:     ['name', 'position'],
    filterProperties:   ['name', 'postion', 'createdAt', 'updatedAt'],
    listProperties:     [ 'id','name', 'postion'],
    showProperties:     [ 'id','name', 'postion', 'createdAt', 'updatedAt'],
}
