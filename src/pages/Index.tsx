import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const monuments = [
    {
      id: 1,
      name: 'Памятник Евгению Онегину',
      character: 'Евгений Онегин',
      location: 'Санкт-Петербург',
      year: '1997',
      image: 'https://cdn.poehali.dev/projects/03acf429-dd37-42eb-a8ba-6253aede6918/files/2fecbc41-95d3-42da-a8df-dbbee8a8e527.jpg',
      description: 'Главный герой романа в стихах, воплощение «лишнего человека» русской литературы'
    },
    {
      id: 2,
      name: 'Памятник Татьяне Лариной',
      character: 'Татьяна Ларина',
      location: 'Москва',
      year: '1999',
      image: 'https://cdn.poehali.dev/projects/03acf429-dd37-42eb-a8ba-6253aede6918/files/5468c402-475f-4ddd-82c6-54e0bd20d2b1.jpg',
      description: 'Идеальный образ русской женщины, героиня романа «Евгений Онегин»'
    },
    {
      id: 3,
      name: 'Памятник Руслану и Людмиле',
      character: 'Руслан и Людмила',
      location: 'Одесса',
      year: '2002',
      image: 'https://cdn.poehali.dev/projects/03acf429-dd37-42eb-a8ba-6253aede6918/files/0a7bd5ad-1f0f-4adf-8823-54cfd434b700.jpg',
      description: 'Герои первой поэмы Пушкина, символ вечной любви и отваги'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary">
              Памятники героям Пушкина
            </h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Памятники', 'Герои', 'История', 'Галерея'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-4 animate-fade-in">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-heading font-bold text-primary leading-tight">
                Бессмертные образы в камне и бронзе
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed">
                Литературные герои Александра Сергеевича Пушкина продолжают жить не только на страницах книг, 
                но и в монументальных произведениях искусства по всему миру.
              </p>
              <div className="flex gap-4">
                <Button 
                  onClick={() => scrollToSection('памятники')}
                  size="lg"
                  className="font-heading text-lg hover:scale-105 transition-transform duration-300"
                >
                  <Icon name="Landmark" className="mr-2" size={20} />
                  Смотреть памятники
                </Button>
                <Button 
                  onClick={() => scrollToSection('история')}
                  variant="outline"
                  size="lg"
                  className="font-heading text-lg hover:scale-105 transition-transform duration-300"
                >
                  Узнать историю
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl animate-scale-in">
                <img 
                  src="https://cdn.poehali.dev/projects/03acf429-dd37-42eb-a8ba-6253aede6918/files/2fecbc41-95d3-42da-a8df-dbbee8a8e527.jpg"
                  alt="Памятник литературному герою"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-accent rounded-full blur-3xl opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="памятники" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-4">
              Памятники
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Монументальные воплощения пушкинских персонажей в различных городах
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {monuments.map((monument, index) => (
              <Card 
                key={monument.id}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={monument.image}
                    alt={monument.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-2xl font-heading font-semibold text-primary">
                    {monument.character}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="MapPin" size={16} />
                    <span className="text-sm font-body">{monument.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Calendar" size={16} />
                    <span className="text-sm font-body">{monument.year}</span>
                  </div>
                  <p className="text-sm text-foreground/80 font-body leading-relaxed pt-2">
                    {monument.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="герои" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-4">
              Литературные герои
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Персонажи, создавшие целую эпоху в русской литературе
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="User" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-primary mb-2">
                    Евгений Онегин
                  </h3>
                  <p className="text-muted-foreground text-sm font-body mb-3">
                    Роман в стихах «Евгений Онегин»
                  </p>
                </div>
              </div>
              <p className="text-foreground/80 font-body leading-relaxed">
                Образ «лишнего человека», разочарованного аристократа, который не может найти своё место в жизни. 
                Его трагическая история с Татьяной стала символом упущенного счастья и запоздалого раскаяния.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Heart" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-primary mb-2">
                    Татьяна Ларина
                  </h3>
                  <p className="text-muted-foreground text-sm font-body mb-3">
                    Роман в стихах «Евгений Онегин»
                  </p>
                </div>
              </div>
              <p className="text-foreground/80 font-body leading-relaxed">
                Идеальный образ русской женщины — искренней, глубокой, верной своим принципам. 
                Её письмо к Онегину стало образцом чистой и самоотверженной любви.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Sword" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-primary mb-2">
                    Руслан
                  </h3>
                  <p className="text-muted-foreground text-sm font-body mb-3">
                    Поэма «Руслан и Людмила»
                  </p>
                </div>
              </div>
              <p className="text-foreground/80 font-body leading-relaxed">
                Отважный богатырь, отправившийся на поиски своей возлюбленной Людмилы. 
                Символ мужества, верности и готовности преодолеть любые препятствия ради любви.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Sparkles" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-primary mb-2">
                    Людмила
                  </h3>
                  <p className="text-muted-foreground text-sm font-body mb-3">
                    Поэма «Руслан и Людмила»
                  </p>
                </div>
              </div>
              <p className="text-foreground/80 font-body leading-relaxed">
                Прекрасная княжна, похищенная злым волшебником в день свадьбы. 
                Воплощение красоты, нежности и веры в торжество добра над злом.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="история" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-4">
              История традиции
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Как герои Пушкина обрели своё место в монументальном искусстве
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-2">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="BookOpen" className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-primary mb-3">
                    Увековечивание литературных образов
                  </h3>
                  <p className="text-foreground/80 font-body leading-relaxed">
                    Традиция создания памятников литературным героям появилась в России в конце XIX века. 
                    Герои Пушкина стали одними из первых, кто был увековечен в бронзе и камне, 
                    что подчёркивает их особое значение для русской культуры.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-2">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Landmark" className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-primary mb-3">
                    Культурное наследие
                  </h3>
                  <p className="text-foreground/80 font-body leading-relaxed">
                    Памятники героям Пушкина располагаются не только в России, но и по всему миру. 
                    Они стали важной частью культурного ландшафта городов, местами паломничества 
                    любителей литературы и символами вечности пушкинского наследия.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-2">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Users" className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-primary mb-3">
                    Современность традиции
                  </h3>
                  <p className="text-foreground/80 font-body leading-relaxed">
                    И в XXI веке продолжают появляться новые памятники героям Пушкина. 
                    Современные скульпторы переосмысливают классические образы, создавая произведения, 
                    которые говорят с новыми поколениями читателей и ценителей искусства.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="галерея" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-4">
              Галерея
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Фотографии памятников литературным героям
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {monuments.map((monument, index) => (
              <div 
                key={monument.id}
                className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img 
                  src={monument.image}
                  alt={monument.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-heading font-semibold mb-2">
                      {monument.character}
                    </h3>
                    <p className="text-sm font-body opacity-90">
                      {monument.location}, {monument.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-heading font-bold">
              Памятники героям Пушкина
            </h3>
            <p className="text-primary-foreground/80 font-body max-w-2xl mx-auto">
              Культурно-образовательный проект, посвящённый монументальному искусству, 
              увековечившему персонажей великого русского поэта
            </p>
            <div className="pt-6 text-sm text-primary-foreground/60 font-body">
              © 2024 Все права защищены
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
