from abc import ABC, abstractmethod

class Individual(ABC):
	@abstractmethod
	def __str__(self):
		pass
	
	@abstractmethod
	def walking(self):
		pass
		
	def set_family(self, family):
        	self.family = family
        	print(f'{self} now in family {family.name}!')
	
	def in_family(self):
		if self.family:
			print(f'{self} in family {self.family.name}')
		else:
			print(f'{self} has no family ;(')
		
class Human(Individual):
	def __init__(self, name, sex, family = None, status = None):
        	self.name = name
        	self.family = family
        	self.sex = sex
        	self.status = status
        
	def __str__(self):
		if self.status:
        		return f'{self.name}, {self.status}'
		else:
        		return self.name

	def walking(self):
		print(f'{self} is walking')
			
	def set_status(self, status):
		print(f'{self} now has status {self.name}, {status}!')
		self.status = status

class Family(Individual):
	def __init__(self, name, individuals, family = None):
        	self.name = name
        	self.family = family
        	self.individuals = individuals
        	for ind in self.individuals:
	        	self.__change_ind_family(ind)
	
	def __str__(self):
		return self.name

	def walking(self):
		print(f'{self.name} is walking:')
		for ind in self.individuals:
			ind.walking()

	def __change_ind_family(self, ind: Individual):
		current_family = ind.family
		if current_family:
			current_family.remove(ind)
		ind.set_family(self)
		if (current_family is not None) and (ind.sex == 'М'):
			current_family.add(self)

	def add(self, ind: Individual, status = None):
		self.individuals.append(ind)
		if status:
			ind.set_status(status)
		self.__change_ind_family(ind)
		
	def remove(self, ind: Individual):
		for i in self.individuals:
			if i == ind:
				self.individuals.remove(ind)
				break
		else:
			print(f'{ind} is not in family {self.name}')
			
	def get_members(self):
		return self.individuals
		
	
if __name__ == '__main__':
	'''
	lev = Human('Lev', 'М')
	lev.in_family()
	lev.walking()
	'''
	print('Семья Петровых')
	petrovy = Family('Petrovy', [Human('Alex', 'М', status = 'husband'), Human('Kate', 'Ж', status = 'wife')])
	petrovy.walking()
	print()
	
	'''
	# Лев Петров - дальний родственник Петровых
	petrovy.add(lev)
	lev.in_family()
	for ind in petrovy.get_members():
		ind.in_family()
	petrovy.walking()
	'''
	
	print('Семья Ивановых')
	ivanovy = Family('Ivanovy', [Human('Denis, husband', 'М'), Human('Mary, wife', 'Ж')])
	print()
	
	print('родился Пётр, в семье Ивановых')
	peter = Human('Peter', 'М', status = 'son')
	ivanovy.add(peter)
	print()
	
	print('в семье Петровых родилась дочь Ольга')
	olga = Human('Olga', 'Ж')
	petrovy.add(olga, status = 'daughter')
	petrovy.walking()
	print()
	
	print('через 20 лет Пётр женился на Ольге')
	peter.walking()
	olga.walking()
	peter.set_status('husband')
	olga.set_status('wife')
	ivanovy_jr = Family('Ivanovy, jr', [peter, olga])
	print()
	
	print('Ольга уже не в семье Петровых, т.к. сменила фамилию')
	for ind in petrovy.get_members():
		ind.in_family()
	print()
		
	ivanovy.walking()
	
'''
Семья Петровых
Alex, husband now in family Petrovy!
Kate, wife now in family Petrovy!
Petrovy is walking:
Alex, husband is walking
Kate, wife is walking

Семья Ивановых
Denis, husband now in family Ivanovy!
Mary, wife now in family Ivanovy!

родился Пётр, в семье Ивановых
Peter, son now in family Ivanovy!

в семье Петровых родилась дочь Ольга
Olga now has status Olga, daughter!
Olga, daughter now in family Petrovy!
Petrovy is walking:
Alex, husband is walking
Kate, wife is walking
Olga, daughter is walking

через 20 лет Пётр женился на Ольге
Peter, son is walking
Olga, daughter is walking
Peter, son now has status Peter, husband!
Olga, daughter now has status Olga, wife!
Peter, husband now in family Ivanovy, jr!
Ivanovy, jr now in family Ivanovy!
Olga, wife now in family Ivanovy, jr!

Ольга уже не в семье Петровых, т.к. сменила фамилию
Alex, husband in family Petrovy
Kate, wife in family Petrovy

Ivanovy is walking:
Denis, husband is walking
Mary, wife is walking
Ivanovy, jr is walking:
Peter, husband is walking
Olga, wife is walking
'''
