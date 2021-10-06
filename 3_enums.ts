enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart
console.log(membership)

const membershipReverse = Membership[2]
console.log(membershipReverse)

enum SocialMedia {
    VK = "vk",
    FB = 'Facebook',
    IG = 'insta'
}
const social = SocialMedia.IG
console.log(social)