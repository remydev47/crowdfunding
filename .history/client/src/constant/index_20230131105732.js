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
        link:'/create-campaign'
    },
    {
        name: 'payment',
        imgurl: payment,
        link:'/',
        disabled: true,
    },
    {
        name: 'withdraw',
        imgurl: withdraw,
        link:'/',
        disabled: true,
    },
    {
        name: 'profile',
        imgurl: profile,
        link:'/',
        disabled: true,
    },
    {
        name: 'logout',
        imgurl: logout,
        link:'/',
        disabled: true,
    },
]