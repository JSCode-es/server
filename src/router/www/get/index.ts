import render from './../../../controller/render'

export default class index
{
    static async html()
    {
        let html = render.file('www/index')
        
        return html
    }
}