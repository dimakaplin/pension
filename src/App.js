import React, { Component } from 'react';
import './App.css';
class FullResult extends Component {
  constructor() {
    super();
    this.state = {
      result: false,
      age: '',
      sex: '',
      smoking: '',
      alco: '',
      drugs: '',
      today: new Date()
    };
  }
  alertResult() {
    if (this.state.result === true) {
    return <div>{this.calcResult()}</div>} 
    else 
    {
      return <div>Чтобы узнать время и обстоятельства своего выхода на пенсию - заполните все формы
            <div className = 'central'>
                <input id="age" type="number" range = '1' value = {this.state.age} onChange = {this.ageInputClick.bind(this)}></input>
                <label for='sex'>укажите ваш пол</label>
                <select id = 'sex' ref = {(select) => {this.selectSex = select;}} onChange = {this.sexInputClick.bind(this)}>
                  <option value="" selected="selected" disabled ='true'  hidden = 'true'>мальчик или девочка</option>
                  <option value = 'man'>мужчина</option>
                  <option value = 'woman'>женщина</option>
                </select>
                <label for='smoking'>курите?</label> 
                <select id = 'smoking' ref = {(select) => {this.selectSmoking = select;}} onChange = {this.smokingInputClick.bind(this)}>
                <option value="" selected="selected" disabled ='true'  hidden = 'true'>да или нет</option>
                  <option value = 'yes'>да</option>
                  <option  value = 'no'>нет</option>
                </select>
                <label for='alco'>пьете?</label>
                <select id = 'alco' ref = {(select) => {this.selectAlco = select;}} onChange = {this.alcoInputClick.bind(this)}>
                <option value="" selected="selected" disabled ='true'  hidden = 'true'>да или нет</option>
                  <option value = 'yes'>да</option>
                  <option value = 'no'>нет</option>
                </select>
                <label for='drugs'>наркотики?</label>
                <select id = 'drugs' ref = {(select) => {this.selectDrugs = select;}} onChange = {this.drugsInputClick.bind(this)}>
                <option value="" selected="selected" disabled ='true'  hidden = 'true'>да или нет</option>
                  <option value = 'yes'>да</option>
                  <option value = 'no'>нет</option>
                </select>    
              </div>
            </div>}
  }
  calcResult() {
    const birthYear = this.state.today.getFullYear() - this.state.age,
          penAge = verifyAge(this.state.sex, birthYear),
          penYear = penAge + birthYear,
          presidentTerm = calcPresidentTerm(penYear, birthYear, penAge),
          habits = verfyHabits (this.state.smoking, this.state.alco, this.state.drugs);
    

    function calcPresidentTerm(penYear, birthYear, penAge) {
      let presidentYears = (penYear - 2030) / 6;
      let termCounter = presidentYears / 3;
      
        //for (;termCounter > 4;) {
        //termCounter = termCounter / 3;
     // }

     switch (true) {
      case penYear >= 2018 && penYear <= 2024 :
        return `4 срок президента Путина`;
      case penYear > 2024 && penYear <= 2030 :
        return `2 срок президента Медведева` ;
      case (termCounter > 3) || (termCounter < 2) :
        return  `${Math.ceil(presidentYears * 0.67) + 4} срок президента Путина`;
      default:
         return `${Math.ceil(presidentYears * 0.34) + 2}  срок президента Медведева`
      }
    }  

    function verifyAge(sex, birthYear) {
      if (sex === 1) {
        switch (true) {
          case birthYear >= 1964 && birthYear <= 1971 :
            return 56 + (birthYear - 1964);
          default:
            return 68;  
        }
      }
      else {
        switch (true) {
          case birthYear >= 1959 && birthYear <= 1963 :
            return 61 + (birthYear - 1959);
          default:
            return 70;  
        }
      }
    }
    function verfyHabits (smoking, alco, drugs) {
      switch (true) {
        case (smoking + alco + drugs === 6) :
          return 'Отказ от вредных привычек сделал свое дело, вы все ещё бодры, веселы и в состоянии работать. Хочется верить, что это надолго.'
        case (smoking === 1 && alco === 2 && drugs === 2) :
          return 'Вы долгое время не употребляли алкоголь, но курили,а курение как известно убивает! У вас отдышка и жуткий кашель больного туберкулёзом.'
        case smoking === 2 && alco === 1 && drugs === 1 :
          return 'Ваше пристрастие к алкоголю и наркотикам ни к чему хорошему не привело. Вы живы, но голова работает из рук вон плохо, работать вы не можете и общение с родными весьма затруднительно.'
        case smoking === 2 && alco === 2 && drugs === 1 :
          return 'Отсутвие пристрастия к табаку и алкоголю - это конечно хорошо, но недостаточно. Вы выбрали наркотики и теперь, но пенсии на все не хватает.'
        case smoking === 2 && alco === 1 && drugs === 2 :
          return 'Вы никогда не курили и наркотиков не употребляли, молодцы. Можете позволить себе рюмочку коньяка на пенсии.'
        case smoking === 1 && alco === 1 && drugs === 2 :
          return 'Скажем наркотикам "дорого"! И вы сказали, а вот про курение и алкоголь забыли. Вся ваша пенсия уходит на сигареты и пиво, это печально.'
        case smoking === 1 && alco === 1 && drugs === 1 :
          return 'Вы Уинстон Черчилль с марихуаной под подушкой. То что вы дожили до пенсии - невероятно круто, можно сказать вам повезло. Сейчас самое время заняться своим здоровьем.'
        default:
          return 123;  
      }
    }
    
    return (<div>
      <p>Поздравляем! Вам {penAge} и вы теперь на заслуженной пенсии.</p>
      <p>На дворе {penYear} год, идёт {presidentTerm}, Россия {penYear >= 2050 ? 'по-прежнему' : ''} встаёт с колен!</p>
      <p>{habits}{this.state.smoking}</p> 
      </div>)
  }
  calcButtonClick = () => {this.setState({result: !this.state.result}) 
  if (this.state.result === true){this.setState({age: '', sex: '', smoking: '', drugs: ''})}}
  buttonValue  = () => {if (this.state.result === true) {return 'пройти еще раз'} else if (this.state.age === '' || this.state.sex === '') {return 'введите пол и возраст'} else {return 'посчитать'}}
  ageInputClick = (event) => {this.setState({age: event.target.value})}
  sexInputClick = () => {this.setState({sex: this.selectSex.options.selectedIndex})}
  smokingInputClick = () => {this.setState({smoking: this.selectSmoking.options.selectedIndex})}
  alcoInputClick = () => {this.setState({alco: this.selectAlco.options.selectedIndex})}
  drugsInputClick = () => {this.setState({drugs: this.selectDrugs.options.selectedIndex})}
  verfyInputs = () => {if (this.state.age !== '' || this.state.sex !== '') {return 'true';} else {return 'false';}}
  render() {
    return (
      <div className = 'central'>
      <div className='result'>
        {this.alertResult()}
      </div>
           
        <button onClick = {this.state.age !== '' || this.state.sex !== '' ? this.calcButtonClick : ''}>{this.buttonValue()}</button>
      </div>
    )};
  }


class App extends Component {
  render() {
    return (
      <div className="background">
        <FullResult/>
      </div>
    );
  }
}

export default App;
