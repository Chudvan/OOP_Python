from abc import ABC, abstractmethod

class Individual(ABC):
	@abstractmethod
	def walking(self):
		pass
		
class Human(Individual):
	def __init__(self, name):
        	self.name = name
	
	def walking(self):
		print(f'{self.name} is walking')

class Family(Individual):
	def __init__(self, name):
        	self.name = name
        	self.individuals = []
	
	def walking(self):
		print(f'{self.name} is walking:')
		for ind in self.individuals:
			ind.walking()
	
	def add(self, ind: Individual):
		self.individuals.append(ind)
		
		
if __name__ == '__main__':
	ivanovy = Family('Ivanovy')
	olga = Human('Olga, mom')
	olga.walking()
	peter = Human('Peter, dad')
	lena = Human('Lena, daughter')
	ivanovy.add(olga)
	ivanovy.add(peter)
	ivanovy.add(lena)
	ivanovy.walking()
	
'''
OUTPUT:
Olga, mom is walking
Ivanovy is walking:
Olga, mom is walking
Peter, dad is walking
Lena, daughter is walking
'''
