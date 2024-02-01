from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.screenmanager import ScreenManager, Screen
from kivy.core.window import Window

class LoginScreen(Screen):
    def check_credentials(self):
        if self.ids.username.text == 'Hakan' and self.ids.password.text == '00000':
            self.manager.current = 'main_screen'

class MainScreen(Screen):
    pass

class CoolPoolApp(App):
    def build(self):
        sm = ScreenManager()
        sm.add_widget(LoginScreen(name='login_screen'))
        sm.add_widget(MainScreen(name='main_screen'))

        Window.clearcolor = (0.68, 0.78, 0.81, 1)  # Pastel blue background color
        return sm

if __name__ == '__main__':
    CoolPoolApp().run()

