# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(
    username: "ChrisBaum89",
    name: "Chris",
    email: "c@gmail.com"
)

user2 = User.create(
    username: "BritB90",
    name: "Brit",
    email: "b@gmail.com"
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