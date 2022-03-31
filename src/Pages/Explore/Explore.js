import React from "react";
import "./explore.css";

export default function Explore() {
  return (
    <div className="form-field">
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Company Name
          </label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" id="inputEmail4" />
        </div>

        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">
            Phone
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            Country
          </label>
          <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="col-md-6">
          <label for="inputState" class="form-label">
            Date of Birth
          </label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-12">
          <label for="inputyourself" class="form-label">
            About YourSelf
          </label>
          <input type="text" class="form-control" id="about you" />
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
