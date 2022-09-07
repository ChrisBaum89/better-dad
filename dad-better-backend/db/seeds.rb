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
    password_digest: "password",
    score: 0,
    level: 0
    
)

user2 = User.create(
    username: "Bob90",
    name: "Bob",
    email: "b@gmail.com",
    password_digest: "password",
    score: 0,
    level: 0

)

child1 = Child.create(
    name: "Steve",
    birthday: "09/03/2018",
    gender: "male",
    user_id: "1"
)

child2 = Child.create(
    name: "Owen",
    birthday: "09/20/2019",
    gender: "male",
    user_id: "1"
)

child3 = Child.create(
    name: "Stacey",
    birthday: "03/20/2019",
    gender: "female",
    user_id: "2"
)

badge1 = Badge.create(
    name: "New Balance Shoes",
    description: "The only choice of footwear for a dad.  The more grass stains on it the better.",
    score_threshold: 500,
    image: "www.testimage1.com"
)

badge2 = Badge.create(
    name: "Bud Light",
    description: "No fancy beer for you. You are a father that doesn't have the time or money for that nonsense.",
    score_threshold: 300,
    image: "www.testimage2.com"
)

badge3 = Badge.create(
    name: "Thick Face Eating Glasses",
    description: "You need to see and it needs to be everything.  Can't have the frame impeding your view!",
    score_threshold: 200,
    image: "www.testimage3.com"
)

task1 = Task.create(
    description: "Tell dad joke 1",
    identifier: rand(1..10000000).to_s,
    value: 10,
    category: "joke"
)

task2 = Task.create(
    description: "Tell dad joke 2",
    identifier: rand(1..10000000).to_s,
    value: 10,
    category: "joke"
)

task3 = Task.create(
    description: "Take out the trash",
    identifier: rand(1..10000000).to_s,
    value: 20,
    category: "goal"
)

task4 = Task.create(
    description: "Play with children without looking at phone for 30 minutes",
    identifier: rand(1..10000000).to_s,
    value: 30,
    category: "goal"
)

assigned_tasks1 = AssignedTask.create(
    user_id: 1,
    task_id: 4
)

completed_tasks1 = CompletedTask.create(
    user_id: 1,
    task_id: 1
)

quote1 = Quote.create(
    description: "A dad is more than just the sum of his parts. He is the very soul of the family.",
    category: "generic",
    active: false
)

quote2 = Quote.create(
    description: "Fathers are men who dared to place the world's hopes and dreams in their children.",
    category: "generic",
    active: false
)

quote3 = Quote.create(
    description: "Even the best dads make mistakes. But there is no mistaking their love for their children.",
    category: "generic",
    active: false
)

quote4 = Quote.create(
    description: "A father teaches his daughter how to love and be loved.",
    category: "daughter",
    active: true
)

quote5 = Quote.create(
    description: "A dad is the hero his son hopes to be.",
    category: "son",
    active: false
)