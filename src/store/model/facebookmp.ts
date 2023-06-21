import {Store} from './store';

export const FacebookMP: Store = {
    backoffStatusCodes: [403, 503],
    currency: '$',
    labels: {
        inStock: {
            container: '',
            text: [''],
        },
        maxPrice: {
            container: '',
            euroFormat: false,
        },
    },
    links: [
        {
            brand: 'test:brand',
            model: 'test:model',
            series: 'test:series',
            url: 'https://store.zotac.com/zotac-gaming-geforce-rtx-2060-twin-fan-zt-t20600f-10m',
        },
    ],
    name: 'FacebookMP'
}