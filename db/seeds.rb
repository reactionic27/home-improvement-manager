puts '== Seeding database =='

100.times do |i|
  types = ['private', 'public']
  status = ['created', 'started', 'stopped', 'completed']
  Project.create!(
    name: Faker::Company.name,
    description: Faker::Lorem.paragraph_by_chars(number: 500, supplemental: false),
    project_type: types.sample,
    estimated_level: rand(20...30),
    actual_level: rand(10...19),
    status: status[rand(0...3)]
  )
end
