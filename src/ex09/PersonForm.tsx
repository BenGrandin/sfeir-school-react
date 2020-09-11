import React from 'react';
import { Card, CardAction, CardActions, CardContent } from '../solution/Card';
import { TextField } from '@rmwc/textfield';
import { Select } from '@rmwc/select';
import { Formik } from 'formik';

const PersonFields: React.FC = () => {
	return (
		<CardContent type="person-form">
			<TextField label="first name" />
			<TextField label="last name" />
			<Select
				label="position"
				options={[
					'Director',
					'Developer',
					'Product Owner',
					'Sales',
					'Human Resources'
				]}
			/>
			<TextField label="phone" />
			<TextField label="email" />
		</CardContent>
	);
};

type PersonFormProps = {
	person: Person;
	onReset: any;
};

export const PersonForm: React.FC<PersonFormProps> = ({ person, onReset }) => {
	return (
		<Card>
			<Formik initialValues={{ firstname: '', lastname: '', position: '', phone: '', email: '' }}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}
				// onReset={() => {
				// 	console.log('reset')
				// 	setEditMode(x => !x);
				// }}
					onReset={() => {
						// ToDo : Not working
						console.log('ok');
						onReset();
					}}

			>
				{({
					  values,
					  errors,
					  touched,
					  handleChange,
					  handleBlur,
					  handleSubmit,
					  isSubmitting
					  /* and other goodies */
				  }) => (
					<form>
						<CardContent type="person-form">
							<TextField label="first name"
									   value={values.firstname}
									   onChange={handleChange}
									   onBlur={handleBlur}
							/>
							<TextField label="last name"
									   value={values.lastname}
									   onChange={handleChange}
									   onBlur={handleBlur} />
							<Select
								label="position"
								options={[
									'Director',
									'Developer',
									'Product Owner',
									'Sales',
									'Human Resources'
								]}
								value={values.position}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<TextField label="phone"
									   value={values.phone}
									   onChange={handleChange}
									   onBlur={handleBlur} />
							<TextField label="email"
									   value={values.email}
									   onChange={handleChange}
									   onBlur={handleBlur} />
						</CardContent>

						<CardActions>
							<CardAction type="submit" disabled={isSubmitting}>save</CardAction>
							<CardAction type="reset" onClick={onReset}>cancel</CardAction>
						</CardActions>
					</form>)
				}
			</Formik>
		</Card>
	);
};
