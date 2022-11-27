# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'json'
require 'httparty'
require 'pry'

user1 = User.create(
    username: "ChrisBaum89",
    name: "Chris",
    email: "c@gmail.com",
    password: "password",
    score: 0,
    level: 0,
)

user2 = User.create(
    username: "Bob90",
    name: "Bob",
    email: "b@gmail.com",
    password: "password",
    score: 0,
    level: 0,
)

badge1 = Badge.create(
    name: "New Balance Shoes",
    description: "The only choice of footwear for a dad.  The more grass stains on it the better.",
    score_threshold: 500,
    image: "https://itk-assets.nyc3.cdn.digitaloceanspaces.com/2020/06/street_style_-_dusseldorf_-_june_12__2020.jpeg"
)

badge2 = Badge.create(
    name: "Bud Light",
    description: "No fancy beer for you. You are a father that doesn't have the time or money for that nonsense.",
    score_threshold: 300,
    image: "https://res.cloudinary.com/promenade-prod/image/upload/b_rgb:ffffff,c_pad,d_alcohol:vendor:global:catalog:product:image-placeholder.png,dpr_2.0,f_auto,fl_preserve_transparency,h_450,q_auto,w_450/v1636953021/alcohol/vendor/100055/catalog/product/b/6/b6392f6a4e8d2fe4af193905b2ec7b35_5fbede3684ee9.jpg"
)

badge3 = Badge.create(
    name: "Dad Glasses",
    description: "You need to see and it needs to be everything.  Can't have the frame impeding your view!",
    score_threshold: 200,
    image: "https://c.shld.net/rpx/i/s/pi/mp/10160405/prod_9456915432?src=http%3A%2F%2Flyimage.club%2Fimages%2FimageB%2FALVB07KXBMBP2.jpg&d=6bf4e65569f1b27907470137c97431dbe9803a95&hei=468&wid=468&op_sharpen=1"
)

badge4 = Badge.create(
    name: "Jorts",
    description: "You need something on your legs that is durable but can breath and you have found them!",
    score_threshold: 100,
    image: "https://pbs.twimg.com/media/Ckm6SllW0AASe7N.jpg",
)

badge5 = Badge.create(
    name: "Lawn Mower",
    description: "Nothing cuts the lawn like that ride-on John Deer.",
    score_threshold: 400,
    image: "https://d14zyouj9r0hpo.cloudfront.net/wp-content/uploads/2019/09/image.png",
)

badge6 = Badge.create(
    name: "Phone Clip",
    description: "Your about efficiency. You phone must be at the ready to handle the demands of today's world!",
    score_threshold: 50,
    image: "https://i.pinimg.com/736x/a3/d4/5d/a3d45d928715e820031d15db64bd5a19.jpg",
)

badge7 = Badge.create(
    name: "Start of Journey",
    description: "Thank you for signing up! You are ready to start your journey to becoming a better dad and role model for your family!",
    score_threshold: 0,
    image: "https://www.shutterstock.com/image-photo/excited-dedicated-football-fan-triumphing-260nw-1164947800.jpg",
)

task4 = Task.create(
    description: "Play with children without looking at phone for 30 minutes",
    identifier: rand(1..10000000).to_s,
    value: 30,
    category: "goal"
)


quote1 = Quote.create(
    description: "A dad is more than just the sum of his parts. He is the very soul of the family.",
    author: "unknown",
    category: "generic",
    active: false
)

quote2 = Quote.create(
    description: "Fathers are men who dared to place the world's hopes and dreams in their children.",
    author: "unknown",
    category: "generic",
    active: false
)

quote3 = Quote.create(
    description: "Even the best dads make mistakes. But there is no mistaking their love for their children.",
    author: "unknown",
    category: "generic",
    active: false
)

quote4 = Quote.create(
    description: "A father teaches his daughter how to love and be loved.",
    author: "unknown",
    category: "daughter",
    active: true
)

quote5 = Quote.create(
    description: "A dad is the hero his son hopes to be.",
    author: "unknown",
    category: "son",
    active: false
)

quote6 = Quote.create(
    description: "One father is more than a hundred schoolmasters.",
    author: "George Herbert",
    category: "generic",
    active: false,
)

quote7 = Quote.create(
    description: "A father doesn’t tell you that he loves you. He shows you.",
    author: "Dimitri the Stoneheart",
    category: "generic",
    active: false,
)

quote8 = Quote.create(
    description: "When my father didn’t have my hand, he had my back.",
    author: "Linda Poindexter",
    category: "generic",
    active: false,
)

quote9 = Quote.create(
    description: "Dad, your guiding hand on my shoulder will remain with me forever.",
    author: "Unknown",
    category: "generic",
    active: false,
)

quote10 = Quote.create(
    description: "Being a great father is like shaving. No matter how good you shaved today, you have to do it again tomorrow.",
    author: "Reed Markham",
    category: "generic",
    active: false,
)