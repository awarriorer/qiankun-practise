
export interface ItemCfg  {
    name: string
    entry: string
    activeRule?: string
    props?: {
        [key: string]: any
    },
    container?: string
}


const baseHost = 'http://sub.gg.com'

export const cfg: ItemCfg[] = [
    {
        name: 'projectA',
        entry: 'project-a',
        props: {
            slogan: 'Hello Qiankun A',
        },
    },
    {
        name: 'projectB',
        entry: 'project-b',
        props: {
            slogan: 'Hello Qiankun B',
        },
    },
]

export const config: any[] = cfg.map(item => {
    return {
        ...item,
        entry: `${baseHost}/${item.entry}`,
        container: item.container || '#sub-project-con',
        activeRule: `/sub-project/${item.entry}`
    }
})

export const lifeCycles = {
    beforeLoad(app: any) {
        console.log('beforeLoad', app.name)
    },
    beforeMount (app: any) {
        console.log('beforeMount', app.name)
    },
    afterMount (app: any) {
        console.log('afterMount', app.name)
    },
    beforeUnmount (app: any) {
        console.log('beforeUnmount', app.name)
    },
    afterUnmount  (app: any) {
        console.log('afterUnmount', app.name)
    }
}