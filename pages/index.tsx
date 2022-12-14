import Link from 'next/link'
import React from 'react'
import MainLayout from '../components/layouts/mainLayout'
import ButtonSetting from '../components/settings/buttonSetting'
import InputRangeSetting from '../components/settings/inputRangeSetting'
import MyButton from '../components/UI/myButton'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { settingsSlice } from '../store/settingsSlice'


export default function Home() {
  const dispatch = useAppDispatch()
  const {numberItems, valueItems, ascending} = useAppSelector(state => state.setting)
  const {setNumberItems, setValueItems, setAscending} = settingsSlice.actions

  const numberItemsArr = ['2', '3', '4', '5']
  const valueItemsArr = ['A', '9', '19', '50', '99', '999']
  const valueItemsOutput = ['letters', 'numbers from 1 to 9', 'numbers from 10 to 19', 'numbers from 20 to 50', 'numbers from 51 to 99', 'numbers from 100 to 999']

  return (
    <MainLayout>
      <InputRangeSetting
        title='number of items'
        inputTitleArr={numberItemsArr}
        min='2'
        max='5'
        value={numberItems}
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => dispatch(setNumberItems(+e.target.value))}
        output={`${numberItems} items`}
      />
      <InputRangeSetting
        title='value of items'
        inputTitleArr={valueItemsArr}
        min='0'
        max='5'
        value={valueItems}
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => dispatch(setValueItems(+e.target.value))}
        output={valueItemsOutput[valueItems]}
      />
      <ButtonSetting
        titleButtonLeft='ascending'
        titleButtonRight='descending'
        value={ascending}
        onClick={() => dispatch(setAscending())}
      />
      <Link href='/game' style={{display: 'contents'}}><MyButton primary>START</MyButton></Link>
    </MainLayout>
  )
}
