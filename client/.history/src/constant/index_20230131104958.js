import { createCampaign, dashboard, logout, payment, profile, withdraw } from "../assets"

export const navlinks = [
    {
        name: 'dashboard',
        imgurl: dashboard,
        link:'/'
    },
    {
        name: 'campaign',
        imgurl: createCampaign,
        link:'/'
    },
    {
        name: 'payment',
        imgurl: payment,
        link:'/'
    },
    {
        name: 'withdraw',
        imgurl: withdraw,
        link:'/'
    },
    {
        name: '',
        imgurl: dashboard,
        link:'/'
    },
]