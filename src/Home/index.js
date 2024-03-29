import "./Home.css";
export default function Home() {
  return (
    <div>
      <div class="screen-1">
        <div class="email">
          <label for="email">Email Address</label>
          <div class="sec-2">
            <ion-icon name="mail-outline"></ion-icon>
            <input type="email" name="email" placeholder="Username@gmail.com" />
          </div>
        </div>
        <div class="password">
          <label for="password">Password</label>
          <div class="sec-2">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input
              class="pas"
              type="password"
              name="password"
              placeholder="············"
            />
            <ion-icon class="show-hide" name="eye-outline"></ion-icon>
          </div>
        </div>
        <button class="login">Login</button>
        <div class="footer">
          <span>Sign up</span>
          <span>Forgot Password?</span>
        </div>
      </div>
    </div>
  );
}
