class Insult < ApplicationRecord
    validate :you_cannot_be_racist

    def you_cannot_be_racist
      slurArray = ['nigger', 'jew', 'wetback', 'fag', 'faggot', 'porch monkey', 'spic', 'faggit', 'fagget', 'f4ggot', 'f4gg0t', 'jigaboo', ]
      slurArray.any? do |s|
        if phrase.include?(s)
           errors.add(:phrase, "Racial/sexist slur used")
        end 
    end
        slurArray.any? do |s|
          if contributor.include?(s)
            errors.add(:contributor, "Racial/sexist slur used")
          end
        end
    end
end


