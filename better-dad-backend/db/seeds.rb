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
    name: "Beer",
    description: "Here's a drink to you! Raise your glasses because you've earned it!",
    score_threshold: 300,
    image: "https://images.pexels.com/photos/4195603/pexels-photo-4195603.jpeg?auto=compress&cs=tinysrgb&w=800"
)
# https://images.pexels.com/photos/573910/pexels-photo-573910.jpeg?auto=compress&cs=tinysrgb&w=800


badge3 = Badge.create(
    name: "Dad Glasses",
    description: "You need to see and it needs to be everything.  Can't have the frame impeding your view!",
    score_threshold: 200,
    image: "https://images.pexels.com/photos/185769/pexels-photo-185769.jpeg?auto=compress&cs=tinysrgb&w=800"
)

badge4 = Badge.create(
    name: "Jorts",
    description: "You need something on your legs that is durable but can breath and you have found them!",
    score_threshold: 100,
    image: "https://images.pexels.com/photos/4910961/pexels-photo-4910961.jpeg?auto=compress&cs=tinysrgb&w=800",
)

badge5 = Badge.create(
    name: "Lawn Mower",
    description: "Nothing cuts the lawn like that ride-on John Deer.",
    score_threshold: 400,
    image: "https://images.pexels.com/photos/12087398/pexels-photo-12087398.jpeg?auto=compress&cs=tinysrgb&w=800",
)

badge7 = Badge.create(
    name: "Start of Journey",
    description: "Thank you for signing up! You are ready to start your journey to becoming a better dad and role model for your family!",
    score_threshold: 0,
    image: "https://images.pexels.com/photos/3768724/pexels-photo-3768724.jpeg?auto=compress&cs=tinysrgb&w=800",
)

task1 = Task.create(
    description: "Take your significant other on a date. If you are currently single, treat yourself to something since you deserve it.",
    identifier: rand(1..10000000).to_s,
    value: 50,
    category: "goal"
)

task2 = Task.create(
    description: "Take out the trash.",
    identifier: rand(1..10000000).to_s,
    value: 20,
    category: "goal"
)

task3 = Task.create(
    description: "Do the dishes.",
    identifier: rand(1..10000000).to_s,
    value: 20,
    category: "goal"
)

task4 = Task.create(
    description: "Clean the toilet.",
    identifier: rand(1..10000000).to_s,
    value: 20,
    category: "goal"
)

task5 = Task.create(
    description: "Play with your children without looking at phone for 30 minutes.",
    identifier: rand(1..10000000).to_s,
    value: 30,
    category: "goal"
)

task6 = Task.create(
    description: "Take your children into nature.",
    identifier: rand(1..10000000).to_s,
    value: 30,
    category: "goal"
)

task7 = Task.create(
    description: "Tell your significant other that you love them. If you are single, take a minute to love and thank yourself.",
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