import { render, screen, fireEvent } from '@testing-library/react';
// import { logRoles } from '@testing-library/dom';
import App, { replaceCamelWithSpaces} from './App';



test('Button has correct initial color', () => {
  // // Render the components
  const {container} = render(<App />)
  // logRoles(container)
  

  //We will be testing at the same time that the button has certain text on it as it's the condition
  const button = screen.getByRole('button', { name: 'Change to Blue'})
  expect(button).toHaveStyle({ backgroundColor: 'red' })  // Styles in react are like this!
})

test('Button turns blue when clicked', () => {
  render (<App />)

  const button = screen.getByRole('button', { name: 'Change to Blue'})
  // We expect the button to still be red
  expect(button).toHaveStyle({ backgroundColor: 'red' })  // Styles in react are like this!

  // We click the button
  fireEvent.click(button)

  // What should happen? Color blue!
  expect(button).toHaveStyle({ backgroundColor: 'blue' })  // Styles in react are like this!

  // And the text should change to 'Change to Red'
  expect(button.textContent).toBe('Change to Red')
})

test('initial checkbox conditions', () => {
  render(<App />)

  const button = screen.getByRole('button', { name: 'Change to Blue'})

  // Is my button enabled?
  expect(button).toBeEnabled()

  // Check that the checkbox is unchecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})

test('First click on checkbox disables button, second click on checkbox re-enables button', () => {
  render(<App />)

  const button = screen.getByRole('button', { name: 'Change to Blue'})

  // Is my button enabled?
  expect(button).toBeEnabled()

  // Check that the checkbox is unchecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()

  // Click the checkbox
  fireEvent.click(checkbox)
  expect(checkbox).toBeChecked()
  expect(button).toBeDisabled()


  // Second click on the checkbox
  fireEvent.click(checkbox)
  expect(checkbox).not.toBeChecked()
  expect(button).toBeEnabled()

})

test('Disabled button has gray background and reverts to red', () => {

  render(<App />)

  const button = screen.getByRole('button', { name: 'Change to Blue'})
  const checkbox = screen.getByRole('checkbox')

  // Disable the button
  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'gray' })  // Styles in react are like this!

  // Re-enable the button
  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'red' })  // Styles in react are like this!

})

test('Click button, disable and has gray background, then re-enable, and it goes back to blue', () => {

  render(<App />)
  const button = screen.getByRole('button', { name: 'Change to Blue'})
  const checkbox = screen.getByRole('checkbox')

  // Button is red
  expect(button).toHaveStyle({ backgroundColor: 'red' })  // Styles in react are like this!

  // Click the button
  fireEvent.click(button)
  expect(button).toHaveStyle({ backgroundColor: 'blue' })  // Styles in react are like this!

  // Disable the button
  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'gray' })  // Styles in react are like this!

  // Re-enable the button
  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'blue' })  // Styles in react are like this!

})



describe('spaces before camel-case capital letters', () => {
  
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })

})  