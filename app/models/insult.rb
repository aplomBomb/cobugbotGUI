class Insult < ApplicationRecord
    validate :you_cannot_be_racist, :must_enter_data

    def you_cannot_be_racist
      slurArray = ['nigger', 'nigg3r', 'n1gger', 'n1gg3r', 'jew', 'j3w', 'joo', 'wetback', 
                    'fag', 'faggot', 'porch monkey', 'spic', 'faggit', 'fagget', 'f4ggot', 
                    'f4gg0t', 'jigaboo', ]

      slurArray.any? do |s|
        if phrase.downcase.include?(s)
           errors.add(:phrase, "Racial/sexist slur used")
        end 
      end
      slurArray.any? do |s|
        if contributor.downcase.include?(s)
          errors.add(:contributor, "Racial/sexist slur used")
        end
      end
    end

    def must_enter_data
      if phrase.strip.length < 8
        errors.add(:phrase, "That insult is too short")
      end
      if contributor.strip.length < 3
        errors.add(:contributor, "Your name needs at least 3 characters")
    end
  end
end


