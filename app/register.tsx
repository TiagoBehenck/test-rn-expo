import Input from '@/components/Input/input';
import { Link, router } from 'expo-router';
import { Formik, useFormik } from 'formik';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { z } from 'zod';
import { toFormikValidate } from 'zod-formik-adapter';

const FormSchema = z.object({
  name: z.string().min(3, 'Nome precisa no mínimo de 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'Precisa de 6 ou mais caracteres'),
  confirmPassword: z.string().min(6, 'Precisa de 6 ou mais caracteres'),
});

type Form = z.infer<typeof FormSchema>;
export default function RegisterFormScreen() {
  const { initialValues, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values: Form) => {
      console.log(values);

      router.push('(tabs)');
    },
  });

  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/logo-nebula-nectar.png')} style={styles.logo} />
        <Text style={styles.title}>Nebula Nectar</Text>
        
        <Formik
          initialValues={initialValues}
          onSubmit={() => handleSubmit()}
          validate={toFormikValidate(FormSchema)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
          <>
            <Input 
              iconName="person-outline"
              placeholder="Nome Completo"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            {(errors.name && touched.name) && <Text style={styles.error}>{errors.name}</Text>}
            
            <Input
              iconName="mail-outline"
              placeholder="E-mail" 
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              textContentType='emailAddress'
              autoComplete='email'
              autoCapitalize='none'
              value={values.email}
            />
            {(errors.email && touched.email) && <Text style={styles.error}>{errors.email}</Text>}
          
            <Input
              isPassword
              iconName="lock-closed-outline"
              placeholder="Senha"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {(errors.password && touched.password) && <Text style={styles.error}>{errors.password}</Text>}

            <Input
              isPassword
              iconName="lock-closed-outline"
              placeholder="Senha (confirmar)"
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
            />
            {(errors.confirmPassword && touched.confirmPassword) && <Text style={styles.error}>{errors.confirmPassword}</Text>}

            <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </>
          )}

        </Formik>
        

        <Text style={styles.text}>Já tem conta?{' '}
            <Link style={styles.signIn} href="/">Faça o login</Link>
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  logo: { 
    width: 72,
    height: 72,
    marginBottom: 16,
    alignSelf: 'center',
  },
  title: { 
    fontSize: 16,
    marginBottom: 64,
    alignSelf: 'center',
    fontFamily: 'PoppinsBold',
  },
  button: { 
    backgroundColor: '#F18F35',
    borderRadius: 5,
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    marginBottom: 16,
    marginTop: 16,
    fontFamily: 'Poppins',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 700,
    color: '#fff',
    fontFamily: 'PoppinsBold'
  }, 
  text: { 
    alignSelf: 'center',
    fontFamily: 'Poppins',
  },
  signIn: { 
    color: '#F18F35',
    fontFamily: 'PoppinsBold'
  },
  error: { 
    color: '#CC31A3',
    fontFamily: 'PoppinsBold',
    fontSize: 12,
    paddingBottom: 8,
  },
});
