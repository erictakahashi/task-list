class List < ActiveRecord::Base
  attr_accessible :list, :lists
  
  # validação do tamanho do item da lista
  validates_length_of :list, :in => 2..40
  
end
