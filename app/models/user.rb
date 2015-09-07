class User < ActiveRecord::Base
	has_secure_password
	has_many :todos, dependent: :destroy

	after_create :set_prequake

	private
		def set_prequake
			# Todo.create(desc: "Become aware of fire evacuation and earthquake safety plans for all of the buildings you occupy regularly.", event: "Prequake")
			# Todo.create(desc: "Pick safe places in each room of your home, workplace and/or school. A safe place could be under a piece of furniture or against an interior wall away from windows, bookcases or tall furniture that could fall on you.", event: "Prequake")
			# Todo.create(desc: "Practice 'drop, cover and hold on' in each safe place. If you do not have sturdy furniture to hold on to, sit on the floor next to an interior wall and cover your head and neck with your arms.", event: "Prequake")
			# Todo.create(desc: "Keep a flashlight and sturdy shoes by each person’s bed in case the earthquake strikes in the middle of the night.", event: "Prequake")
			# Todo.create(desc: "Keep and maintain an emergency supplies kit (water, batteries, cash) in an easy-to-access location.", event: "Prequake")
		end

end
