// 1. Code runs as you type: edit message
class naive_bayes {
    constructor(real_total_dict, fake_total_dict) {
        this.real_total_dict = real_total_dict;
        this.fake_total_dict = fake_total_dict;
        this.prior_of_real = 0.6532068807006508;
        this.prior_of_fake = 0.3467931192993492;
        this.real_lowest_prob = 1.1668910987213207e-06;
        this.fake_lowest_prob = 2.0186971732183482e-06;
    }

    prob_calculation(prior, prob_dict, lowest_prob, message) {
        var res_prob = prior;
        for (const single_char of message) {
          console.log(single_char);
          if (single_char in prob_dict){
              res_prob *= prob_dict[single_char];
          }
          else{
              res_prob *= lowest_prob;
          }
        }
        return res_prob
    }

    predict_message(message){
        // 'naive bayes classifier'
        // 'Return: ' \
        // 'real_prob: the probability of passing tc' \
        // 'pred_label: whether this message is going to pass tc or not'

        var real_prob = this.prob_calculation(this.prior_of_real, this.real_total_dict, this.real_lowest_prob, message)
        var fake_prob = this.prob_calculation(this.prior_of_fake, this.fake_total_dict, this.fake_lowest_prob, message)
        // 'then, we normalize these probabilities'
        let total_prob = real_prob + fake_prob
        real_prob /= total_prob
        fake_prob /= total_prob

        if (real_prob > 0.9){
            return [real_prob, 1]
        }
        else{
            return [real_prob, 0]
        }
    }

    naive_bayes_interface(input_message){
        if (input_message.length < 10 || input_message.length > 50){
            return [0.0, 0]
        }
        // 'Split the input_message via space'
        var splitted_input_message = input_message.splice(" ")
        console.log(splitted_input_message)
        if (splitted_input_message.length === 1){
            // 'support & split japanese & emoji'
            splitted_input_message = splitted_input_message.split('');
        }
        return this.predict_message(splitted_input_message)
    }
}



